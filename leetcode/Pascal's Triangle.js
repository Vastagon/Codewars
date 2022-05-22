var generate = function(numRows) {
    let endArray = []
    
    ///Per row
    for(let i = 0; i < numRows; i++){
        let tempArray = []
        ///Array inside array
        for(let j = 0; j-1 < i; j++){
            ///First row and last row
            if(j === 0 || j === i){
                tempArray.push(1)                
            }else{
                tempArray.push(endArray[i-1][j] + endArray[i-1][j-1])
            }
        }
        ///Number directly above it and to the left
        endArray.push(tempArray)
    }
    
    return endArray
};
