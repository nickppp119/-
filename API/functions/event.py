from functions import mongodb
from datetime import datetime


async def search(user_role, event_id = ''):
  search_filter = { }

  if user_role < 2:
    search_filter.update({ 'role': user_role })

  if event_id != '':
    search_filter.update({ 'id': event_id })

  return  await mongodb.find('event', search_filter)

async def check(event_id):
  results = await mongodb.find('event', {
    'id': event_id
  })

  return len(results) != 0

async def create(title, content, user_role):
  results = await mongodb.find('event', { })

  event_id = '000001' if results == [] else str(int(sorted(results, key=lambda x: x['id'])[-1]['id']) + 1).zfill(6)

  await mongodb.insert('event', {
    'id': event_id,
    'title': title,
    'content': content,
    'role': user_role,
    'date': datetime.now()
  })

# E
async def remove(event_id):
  await mongodb.delete('event', {
    'id': event_id
  })

# E
async def update(event_id, title, content, user_role):
  await mongodb.update('event', {
      'id': event_id
    }, {
      '$set': {
        'title': title,
        'content': content,
        'role': user_role,
        'date': datetime.now()
      }
    }
  )