import io
from typing import Optional
import easyocr

from pydantic import BaseModel
# from google.cloud import vision
# client = vision.ImageAnnotatorClient()

reader = easyocr.Reader(['ko', 'en'], gpu=True)

class OCR_Result(BaseModel):
    result: Optional[str]
    error: Optional[str]


def Prediction_OCR(image: bytes) -> OCR_Result:
    Return = OCR_Result()

    try:
        PredictionResult = reader.readtext(image, detail=1)
        ResultArray = []
        if (not PredictionResult): Return.result = "인식된 글자가 없습니다."
        else: 
            for sentence in PredictionResult:
                if sentence[2] >= 0.3:
                    ResultArray.append(sentence[1])
            Return.result = ", ".join(ResultArray)
    except Exception as e:
        print(e)
        Return.result = "인식에 실패했습니다."
    return Return

# def test():
#     with io.open('./test2.jpeg', 'rb') as img:
#         i = img.read()
#         print(Prediction_OCR(i))
# test()
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