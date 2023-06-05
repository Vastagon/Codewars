def square_digits(num):
    finalString = ""
    tempArray = list(str(num))
    
    for i in tempArray:
        finalString = finalString + str(int(i) * int(i))
        
    return int(finalString)
