from fastapi import APIRouter, HTTPException, Form, Depends
from functions import token, event


router = APIRouter()

@router.get('/search', tags=['事件'], name='搜尋所有事件')
async def search(token_payload: dict = Depends(token.get)):
  user_role = token_payload['role']

  results =  await event.search(int(user_role))

  if results != []:
    return results
  else:
    raise HTTPException(404, '事件不存在或沒有權限!')

@router.get('/search/{event_id}', tags=['事件'], name='搜尋事件')
async def search(token_payload: dict = Depends(token.get), event_id = ''):
  user_role = token_payload['role']

  results =  await event.search(int(user_role), event_id)

  if results != []:
    return results
  else:
    raise HTTPException(404, '事件不存在或沒有權限!')

@router.post('/create', tags=['事件'], name='建立事件')
async def create(
  token_payload: dict = Depends(token.get),
  title = Form(...),
  content = Form(...)
):
  user_role = token_payload['role']

  await event.create(title, content, int(user_role))

  raise HTTPException(200, '新增成功!')

# E
@router.delete('/remove', tags=['事件'], name='刪除事件')
async def remove(token_payload: dict = Depends(token.get), event_id = Form(...)):
  if not await event.check(event_id):
    raise HTTPException(400, '事件不存在!')

  user_role = token_payload['role']

  await event.remove(event_id)

  raise HTTPException(200, '刪除成功!')

# E
@router.put('/update', tags=['事件'], name='更新事件')
async def update(
  token_payload: dict = Depends(token.get),
  event_id = Form(...),
  title = Form(...),
  content = Form(...)
):
  if not await event.check(event_id):
    raise HTTPException(400, '事件不存在!')

  user_role = token_payload['role']

  await event.update(event_id, title, content, int(user_role))

  raise HTTPException(200, '更新成功!')