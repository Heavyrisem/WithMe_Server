import uvicorn

from typing import Optional

from fastapi import FastAPI, File, UploadFile
from fastapi.exceptions import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from customFunctions import index, save
from ocr.prediction import Prediction_OCR
# from ocr.TTS import TextToBase64, TTS_Result


from caption.prediction import Prediction_Caption

app = FastAPI()

origins = [
    "https://192.168.0.53",
    "https://192.168.0.53:3000",
    "https://192.168.0.53:3001",
    "https://localhost",
    "https://localhost:3000",
    "https://localhost:3001",
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class API_Response(BaseModel):
    result: Optional[str]
    detail: Optional[str]

@app.post("/caption", response_model=API_Response)
async def run_ocr(file: UploadFile = File(...)):
    Return = API_Response()
    ALLOW_TYPES = ['jpg', 'jpeg', 'png', 'jpg']
    file_type = file.filename.split(".")[-1]
    
    if (index(ALLOW_TYPES, file_type) == None):
        raise HTTPException(
            status_code=422,
            detail="not allowed extension"
        )
    try:
        detection = Prediction_Caption(await save(file))
    except Exception as e:
        print(e)
        Return.detail = str(e)
    else:
        if (detection and detection.result):
            Return.result = detection.result
        elif (detection.error):
            raise HTTPException(
                status_code=418,
                detail=detection.error
            )
        else:
            raise HTTPException(
                status_code=500,
                detail="unknown error"
            )
    return Return

@app.post("/ocr", response_model=API_Response)
async def run_ocr(file: UploadFile = File(...)):
    Return = API_Response()
    ALLOW_TYPES = ['jpg', 'jpeg', 'png', 'jpg']
    file_type = file.filename.split(".")[-1]
    
    if (index(ALLOW_TYPES, file_type) == None):
        raise HTTPException(
            status_code=422,
            detail="not allowed extension"
        )
    try:
        detection = Prediction_OCR(await save(file))
    except Exception as e:
        print(e)
        Return.detail = str(e)
    else:
        if (detection and detection.result):
            Return.result = detection.result
        elif (detection.error):
            raise HTTPException(
                status_code=418,
                detail=detection.error
            )
        else:
            raise HTTPException(
                status_code=500,
                detail="unknown error"
            )
    return Return



# class TTS_Request(BaseModel):
#     text: str
# @app.post("/tts", response_model=API_Response)
# async def run_TTS(Body: TTS_Request):
#     Return = API_Response()

#     tts = TextToBase64(Body.text)

#     if (tts.result):
#         Return.result = tts.result
#     else:
#         Return.detail = tts.err
    
#     return Return



if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=3001)