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
    'role': role,
    'password': password
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
        'role': role,
        'password': password
      }
    }
  )