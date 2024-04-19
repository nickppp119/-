from functions import mongodb


async def search(index = 0):
  return await mongodb.find('event', { }) if index == 0 else await mongodb.find('event', {
    'index': int(index)
  })

async def check(index):
  results = await mongodb.find('event', {
    'index': int(index)
  })

  return len(results) != 0

async def create(title, password, role):
  number = await search()

  await mongodb.insert('event', {
    'index': len(number) + 1,
    'title': title,
    'role': role,
    'password': password
  })

async def remove(index):
  await mongodb.delete('event', {
    'index': int(index)
  })

async def update(index, title, password, role):
  await mongodb.update('event', {
      'index': int(index)
    }, {
      '$set': {
        'title': title,
        'role': role,
        'password': password
      }
    }
  )