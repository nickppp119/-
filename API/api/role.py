from fastapi import APIRouter, HTTPException
from functions import mongodb

router = APIRouter()

@router.get('')
async def search():
  results = await mongodb.find('role', { })
  raise HTTPException(200, results)