# FROM python:3.6
FROM pytorch/pytorch:1.9.0-cuda10.2-cudnn7-runtime
LABEL maintainer = "pyo1748@naver.com"

COPY . /app/server
WORKDIR /app/server

RUN pip install -r requires.txt

ENV GOOGLE_APPLICATION_CREDENTIALS=lateral-concord-298602-00ecb37ddd21.json

ENTRYPOINT [ "python", "main.py" ]