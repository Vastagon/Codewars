def series_sum(n):
    i = 0
    finalNum = 0
    denomentator = 1
    
    while i < n:
        finalNum = finalNum + (1/denomentator)    
        
        denomentator += 3
        i = i + 1
        
    return str('{:.2f}'.format(round(finalNum, 2)))
