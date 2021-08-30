import io
from typing import Optional
import easyocr

from pydantic import BaseModel
# from google.cloud import vision
# client = vision.ImageAnnotatorClient()

reader = easyocr.Reader(['ko', 'en'], gpu=False)

class OCR_Result(BaseModel):
    result: Optional[str]
    error: Optional[str]


def Prediction_OCR(image: bytes) -> OCR_Result:
    Return = OCR_Result()

    try:
        Return.result = reader.readtext(image, detail=0.2)[0][1]
        if (not Return.result): Return.result = "인식된 글자가 없습니다."
    except Exception as e:
        print(e)
        Return.error = "인식에 실패했습니다."
    return Return

# def test():
#     with io.open('./test2.jpeg', 'rb') as img:
#         i = img.read()
#         Predction_OCR(i)
# def Prediction_OCR(image: bytes):
#     Return = OCR_Result()

#     image = vision.Image(content=image)

#     response = client.text_detection(image=image)
#     texts = response.text_annotations

#     if (len(texts)):
#         Return.result = str(texts[0].description)
#     else:
#         Return.error = str(response.error.message)

#     return Return