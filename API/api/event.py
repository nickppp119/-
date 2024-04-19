from fastapi import APIRouter, HTTPException, Form, Depends
from functions import token, event


router = APIRouter()

@router.post('/create')
async def add(
  token_payload: dict = Depends(token.get), 
  title = Form(...),
  content = Form(...),
  role = Form(...)
):
  await event.create(title, content, role)

  raise HTTPException(200, '新增成功!')

@router.get('/search/{title}')
async def search(index = 0):
  return await event.search(index)

@router.delete('/remove')
async def remove(token_payload: dict = Depends(token.get), index = Form(...)):
  if not await event.check(index):
    raise HTTPException(400, '事件不存在!')

  await event.remove(index)

  raise HTTPException(200, '刪除成功!')

@router.put('/update')
async def update(
  token_payload: dict = Depends(token.get),
  index = Form(...),
  title = Form(...),
  content = Form(...),
  role = Form(...)
):
  if not await event.check(index):
    raise HTTPException(400, '事件不存在!')

  await event.update(index, title, content, role)

  raise HTTPException(200, '修改成功!')