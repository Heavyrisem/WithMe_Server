from playsound import playsound
playsound("O.wav")
# # Imports the Google Cloud client library
# from google.cloud import speech
# import base64
# import io

# # Instantiates a client
# client = speech.SpeechClient()

# with io.open('./bs', "r") as audio_file:
#     content = audio_file.read()
#     content = base64.b64decode((content).split(",")[1])

# # with io.open('./bs', "wb") as f:
# #     b = base64.b64decode((content).split(",")[1])

# #     print(b)
# #     f.write(b)

# # print(content)


# # The name of the audio file to transcribe
# # gcs_uri = "gs://cloud-samples-data/speech/brooklyn_bridge.raw"


# audio = speech.RecognitionAudio(content=content)
# # audio = speech.RecognitionAudio(uri="gs://cloud-samples-data/speech/brooklyn_bridge.raw")

# config = speech.RecognitionConfig(
#     encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
#     sample_rate_hertz=48000,
#     language_code="ko-KR",
# )

# # # Detects speech in the audio file
# response = client.recognize(config=config, audio=audio)
# print(response)
# for result in response.results:
#     print("Transcript: {}".format(result.alternatives[0].transcript))