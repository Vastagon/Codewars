def find_missing_letter(chars):
    startingLetter = ord(chars[0])
    i = 0
    
    for i in range(1, len(chars)):        
        if (ord(chars[i])) != (startingLetter + i):
            return chr(startingLetter + i)
