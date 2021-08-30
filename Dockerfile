# FROM python:3.6
FROM pytorch/pytorch:1.9.0-cuda10.2-cudnn7-runtime
LABEL maintainer = "pyo1748@naver.com"

COPY . /app/server
WORKDIR /app/server

RUN apt-get update
RUN apt-get -y install libgl1-mesa-glx
RUN apt-get -y install libglib2.0-0
RUN pip install -r requires.txt

ENTRYPOINT [ "python", "main.py" ]