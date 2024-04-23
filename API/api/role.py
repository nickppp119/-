from fastapi import APIRouter
from functions import role


router = APIRouter()

@router.get('/search', tags=['身分別'], name='取得所有身分別')
async def search():
  return await role.search()