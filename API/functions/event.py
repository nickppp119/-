from functions import mongodb
from datetime import datetime


async def search(user_role, event_id = ''):
  search_filter = { }

  if user_role < 2:
    search_filter.update({ 'role': user_role })

  if event_id != '':
    search_filter.update({ 'id': event_id })

  return  await mongodb.find('event', search_filter)

async def search_date(user_role, event_date):
  date = str(event_date).split('-')
  date = [int(d) for d in date]
  start_date = datetime(date[0], date[1], date[2], 0, 0, 0)
  end_date = datetime(date[0], date[1], date[2], 23, 59, 59)

  search_filter = { }

  if user_role < 2:
    search_filter.update({ 'role': user_role })

  search_filter.update({
    'date': {
      '$gte': start_date,
      '$lte': end_date
    }
  })

  return await mongodb.find('event', search_filter)

async def check(event_id, user_role):
  search_filter = { }

  if user_role < 2:
    search_filter.update({ 'role': user_role })

  search_filter.update({
    'id': event_id
  })

  results = await mongodb.find('event', search_filter)

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

async def remove(event_id, user_role):
  search_filter = { }

  if user_role < 2:
    search_filter.update({ 'role': user_role })

  search_filter.update({
    'id': event_id
  })

  await mongodb.delete('event', search_filter)


async def update(event_id, title, content, user_role):
  search_filter = { }

  if user_role < 2:
    search_filter.update({ 'role': user_role })

  search_filter.update({
    'id': event_id
  })

  await mongodb.update('event', search_filter, {
    '$set': {
      'title': title,
      'content': content,
      'role': user_role,
      'date': datetime.now()
    }
  })