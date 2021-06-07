from typing import Optional

from pydantic import BaseModel
from google.cloud import vision
client = vision.ImageAnnotatorClient()

class OCR_Result(BaseModel):
    result: Optional[str]
    error: Optional[str]

def Prediction_OCR(image: bytes):
    Return = OCR_Result()

    image = vision.Image(content=image)

    response = client.text_detection(image=image)
    texts = response.text_annotations

    if (len(texts)):
        Return.result = str(texts[0].description)
    else:
        Return.error = str(response.error.message)

    return Return