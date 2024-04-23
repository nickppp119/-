from functions import mongodb


async def search():
  return  await mongodb.find('role', { })