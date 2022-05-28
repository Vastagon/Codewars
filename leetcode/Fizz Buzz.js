var fizzBuzz = function(n) {
    let fArray = []
    for(let i = 1; i < n+1; i++){
        let fString = ""

        if(i % 3 !== 0 && i % 5 !== 0){
            fArray.push(i.toString())
        }else{
            if(i % 3 === 0){
                fString = fString + "Fizz"
            }
            if(i % 5 === 0){
                fString = fString + "Buzz"
            }
            fArray.push(fString)
        }
    }
    
    return fArray
};
