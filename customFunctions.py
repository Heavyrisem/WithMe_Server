from posixpath import dirname
from typing import Tuple

from fastapi.datastructures import UploadFile
import uuid

import os


def index(a_list: Tuple, value: str):
    # Find Value
    try:
        return a_list.index(value)
    except ValueError:
        return None

async def save(file: UploadFile, type: str):
    file_type = file.filename.split(".")[-1]
    Token = str(uuid.uuid4())+"."+file_type
    image = await file.read()
    dirname = "./temp/"+type+"/"+Token

    os.makedirs(os.path.dirname(dirname), exist_ok=True)
    f = open(dirname, "wb")
    f.write(image)
    return image