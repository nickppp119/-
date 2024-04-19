import os
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from api.role import router as role_router
from api.user import router as user_router
from api.event import router as event_router
load_dotenv()

def create_app():
  app = FastAPI()

  app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
  )

  return app

app = create_app()
app.include_router(role_router, prefix='/api/role')
app.include_router(user_router, prefix='/api/user')
app.include_router(event_router, prefix='/api/event')
if __name__ == '__main__':
  API_HOST = os.getenv('API_HOST')
  API_PORT = int(os.getenv('API_PORT'))

  uvicorn.run(app, host=API_HOST, port=API_PORT)