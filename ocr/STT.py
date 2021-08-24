# from playsound import playsound
# playsound("O.wav")
# # Imports the Google Cloud client library
from google.cloud import speech
# import base64
import io
import os
import wave

with wave.open('../output.mp3', "rb") as wave_file:
    frame_rate = wave_file.getframerate()


    # # Instantiates a client
    client = speech.SpeechClient()

    # with io.open('./bs', "r") as audio_file:
    #     content = audio_file.read()
    #     content = base64.b64decode((content).split(",")[1])

    # # with io.open('./bs', "wb") as f:
    # #     b = base64.b64decode((content).split(",")[1])

    # #     print(b)
    # #     f.write(b)

    # # print(content)


    # # The name of the audio file to transcribe
    gcs_uri = "gs://cloud-samples-data/speech/brooklyn_bridge.raw"


    audio = speech.RecognitionAudio(content=wave_file)
    # audio = speech.RecognitionAudio(uri="gs://cloud-samples-data/speech/brooklyn_bridge.raw")

    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=frame_rate,
        language_code="en-US",
    )

    # # # Detects speech in the audio file
    response = client.recognize(config=config, audio=audio)
    print(response)
    for result in response.results:
        print("Transcript: {}".format(result.alternatives[0].transcript))