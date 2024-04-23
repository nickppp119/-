from functions import mongodb


async def search(username = ''):
  return await mongodb.find('user', { }) if username == '' else await mongodb.find('user', {
    'username': username
  })

async def check(username):
  results = await mongodb.find('user', {
    'username': username
  })

  return len(results) != 0

async def create(username, password, role):
  await mongodb.insert('user', {
    'username': username,
    'password': password,
    'role': role
  })

async def remove(username):
  await mongodb.delete('user', {
    'username': username
  })

async def update(username, password, role):
  await mongodb.update('user', {
      'username': username
    }, {
      '$set': {
        'password': password,
        'role': role
      }
    }
  )