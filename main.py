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


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}


@app.post("/prediction")
async def run_ai(file: UploadFile = File(...)):
    image = await file.read();
    print(type(image))
    testResult = ["코딩을 하는 한지수가 보이네요", "잠을 자는 동현이가 보이네요", "책상 위에 놓인 노트북이 보이네요", "물병 두 개가 보이네요"]


    return {"result": random.choice(testResult)}