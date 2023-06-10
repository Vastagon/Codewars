def alphabet_position(text):
    finalString = ""
    for letter in text:
        if ord(letter.lower()) > 96 and ord(letter.lower()) < 123:
            finalString = finalString + " " + str((ord(letter.lower()) - 96))
            
    finalString = finalString[1:]
    return finalString
