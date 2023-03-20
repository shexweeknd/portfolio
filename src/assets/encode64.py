import base64
import io

with open("b64.txt", "r") as txt:
    b64string = txt.read()

with open('64.png', 'wb') as f:
    f.write(base64.decodebytes(b64string.encode()))


# with open("./about.png", "rb") as image_file:
#     encoded_string = base64.b64encode(image_file.read())

# print(encoded_string)