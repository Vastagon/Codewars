def camel_case(s):
    wordArray = s.split(" ")
    
    for i in range(len(wordArray)):
        wordArray[i] = wordArray[i].title()
        
    return "".join(wordArray)
