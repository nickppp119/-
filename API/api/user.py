from fastapi import APIRouter, HTTPException, Form, Depends
from functions import user, token


router = APIRouter()

@router.post('/login')
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

@router.post('/create')
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

  raise HTTPException(200, '新增成功!')

@router.get('/search/{username}')
async def search(username = ''):
  return await user.search(username)

@router.delete('/remove')
async def remove(token_payload: dict = Depends(token.get), username = Form(...)):
  user_role = token_payload['role']

  if int(user_role) != 2:
    raise HTTPException(400, '使用者沒有權限!')

  if not await user.check(username):
    raise HTTPException(400, '使用者不存在!')

  await user.remove(username)

  raise HTTPException(200, '刪除成功!')

@router.put('/update')
async def update(token_payload: dict = Depends(token.get), username = Form(...), password = Form(...), role = Form(...)):
  if not await user.check(username):
    raise HTTPException(400, '使用者不存在!')

  await user.update(username, password, role)

  raise HTTPException(200, '修改成功!')