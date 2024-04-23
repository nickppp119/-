from fastapi import APIRouter, HTTPException, Form, Depends
from functions import user, token


router = APIRouter()

@router.post('/login', tags=['使用者'], name='登入')
async def login (username = Form(...), password = Form(...)):
  if await user.check(username):
    results = await user.search(username)
    result = results[0]

    if result['password'] != password:
      raise HTTPException(401, '密碼錯誤!')

    raise HTTPException(200, {
      'username': result['username'],
      'role': result['role'],
      'token': token.generate(result)
    })
  else:
    raise HTTPException(400, '使用者不存在!')

@router.get('/search', tags=['使用者'], name='取得所有使用者')
async def search_all():
  return await user.search()

@router.get('/search/{username}', tags=['使用者'], name='取得特定使用者')
async def search(username = ''):
  return await user.search(username)

@router.post('/create', tags=['使用者'], name='創建使用者')
async def create(
  token_payload: dict = Depends(token.get),
  username = Form(...),
  password = Form(...),
  role = Form(...)
):
  user_role = token_payload['role']

  if int(user_role) != 2:
    raise HTTPException(400, '使用者沒有權限!')

  if await user.check(username):
    raise HTTPException(400, '使用者已存在!')

  await user.create(username, password, role)

  raise HTTPException(200, '創建成功!')

@router.delete('/remove', tags=['使用者'], name='刪除使用者')
async def remove(token_payload: dict = Depends(token.get), username = Form(...)):
  user_role = token_payload['role']

  if int(user_role) != 2:
    raise HTTPException(400, '使用者沒有權限!')

  if not await user.check(username):
    raise HTTPException(400, '使用者不存在!')

  await user.remove(username)

  raise HTTPException(200, '刪除成功!')

@router.put('/update', tags=['使用者'], name='編輯使用者')
async def update(token_payload: dict = Depends(token.get), username = Form(...), password = Form(...), role = Form(...)):
  if not await user.check(username):
    raise HTTPException(400, '使用者不存在!')

  await user.update(username, password, role)

  raise HTTPException(200, '修改成功!')