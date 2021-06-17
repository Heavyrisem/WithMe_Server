import base64
from google.cloud import texttospeech
from typing import Optional

client = texttospeech.TextToSpeechClient()


class TTS_Result:
    result: Optional[str]
    err: Optional[str]

def TextToBase64(text: str):
    Return = TTS_Result()

    if not len(text):
        Return.err = "TEXT_IS_NULL"
    else:    
        synthesis_input = texttospeech.SynthesisInput(text=text)

        voice = texttospeech.VoiceSelectionParams(
            language_code="ko-KR", name="ko-KR-Wavenet-C", ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
        )

        audio_config = texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.MP3
        )

        response = client.synthesize_speech(
            input=synthesis_input, voice=voice, audio_config=audio_config
        )

        if (response.audio_content):
            Return.result = base64.b64encode(response.audio_content)

    return Return

# The response's audio_content is binary.
# with open("output.mp3", "wb") as out:
    # Write the response to the output file.
    # out.write(response.audio_content)
    # print('Audio content written to file "output.mp3"')