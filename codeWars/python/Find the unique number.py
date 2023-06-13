def find_uniq(arr):
    
    sumObj = sorted(arr)
    
    if(sumObj[0] == sumObj[1]):
        return sumObj[len(sumObj)-1]
    else:
        return sumObj[0]
