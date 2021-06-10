import uvicorn

from typing import Optional

from fastapi import FastAPI, File, UploadFile
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import HTTPException
from pydantic import BaseModel

from customFunctions import index
from ocr.prediction import Prediction_OCR

import random

app = FastAPI()


class API_Response(BaseModel):
    result: Optional[str]
    detail: Optional[str]


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/caption", response_model=API_Response)
async def run_Image_Caption(file: UploadFile = File(...)):
    image = await file.read()
    print(type(image))
    testResult = ["코딩을 하는 한지수가 보이네요", "잠을 자는 동현이가 보이네요", "책상 위에 놓인 노트북이 보이네요", "물병 두 개가 보이네요"]

    return {"result": random.choice(testResult)}

@app.post("/ocr", response_model=API_Response)
async def run_ocr(file: UploadFile = File(...)):
    print(file.filename)
    Return = API_Response()
    ALLOW_TYPES = ['jpg', 'jpeg', 'png', 'jpg']
    file_type = file.filename.split(".")[-1]
    
    if (index(ALLOW_TYPES, file_type) == None):
        raise HTTPException(
            status_code=422,
            detail="not allowed extension"
        )
    image = await file.read()
    print(image)
    f = open(file.filename, 'wb')
    # for b in image:
    #     print(b)
    f.write(image)
    f.close()
    detection = Prediction_OCR(image)

    # if (detection and detection.result):
    #     Return.result = detection.result
    # elif (detection.error):
    #     raise HTTPException(
    #         status_code=418,
    #         detail=detection.error
    #     )
    # else:
    #     raise HTTPException(
    #         status_code=500,
    #         detail="unknown error"
    #     )
    return Return



if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=3000, reload=True)