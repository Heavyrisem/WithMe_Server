from typing import Tuple

from fastapi.datastructures import UploadFile
import uuid


def index(a_list: Tuple, value: str):
    # Find Value
    try:
        return a_list.index(value)
    except ValueError:
        return None

async def save(file: UploadFile):
    file_type = file.filename.split(".")[-1]
    Token = str(uuid.uuid4())+"."+file_type
    image = await file.read()
    f = open("./temp/"+Token, "wb")
    f.write(image)
    return image