from typing import Optional

from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel

import random

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: Optional[bool] = None


@app.get("/")
def read_root():
    return {"Hello": "World"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Optional[str] = None):
#     return {"item_id": item_id, "q": q}

# @app.put("/items/{item_id}")
# def update_item(item_id: int, item: Item):
#     return {"item_name": item.name, "item_id": item_id}


@app.post("/caption")
async def run_imageCaption(file: UploadFile = File(...)):
    image = await file.read()
    print(type(image))
    testResult = ["코딩을 하는 한지수가 보이네요", "잠을 자는 동현이가 보이네요", "책상 위에 놓인 노트북이 보이네요", "물병 두 개가 보이네요"]

    return {"result": random.choice(testResult)}

@app.post("/ocr")
async def run_ocr(file: UploadFile = File(...)):
    image = await file.read()
    print(type(image))
    testResult = ["동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세", "마하반야바라밀다심경 관자재보살 행심반야바라밀다시 조견오온개공 도일체고액 사리자"]

    return {"result": random.choice(testResult)}