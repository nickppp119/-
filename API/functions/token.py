from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jwt import encode, decode
from dotenv import load_dotenv
import os


load_dotenv()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='authenticate')

SECRET_KEY = os.getenv('SECRET_KEY')

def generate (result: dict) -> str:
  payload = {
    'username': result['username'],
    'role': result['role']
  }
  
  token = encode(payload, SECRET_KEY, algorithm='HS256')

  return token


def get (auth_header: str = Depends(oauth2_scheme)) -> dict:
  token = auth_header

  try:
    payload = decode(token, SECRET_KEY, algorithms=['HS256'])

    return payload
  except:
    raise HTTPException(422, 'Token 格式錯誤')
  