
from typing import Tuple


def index(a_list: Tuple, value: str):
    # Find Value
    try:
        return a_list.index(value)
    except ValueError:
        return None
