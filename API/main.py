import os
import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from api.user import router as user_router
from api.event import router as event_router
from api.role import router as role_router


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

app.include_router(user_router, prefix='/api/user')
app.include_router(event_router, prefix='/api/event')
app.include_router(role_router, prefix='/api/role')


@app.get('/static/{full_path:path}')
async def static(request: Request, full_path):
  return FileResponse(f'dist/static/{full_path}')

@app.get('/images/{full_path:path}')
async def images(request: Request, full_path):
  return FileResponse(f'dist/images/{full_path}')

@app.get('/{full_path:path}')
async def pages():
  return FileResponse('dist/index.html')

app.mount('/', StaticFiles(directory='dist'))

if __name__ == '__main__':
  API_HOST = os.getenv('API_HOST')
  API_PORT = int(os.getenv('API_PORT'))

  uvicorn.run(app, host=API_HOST, port=API_PORT)