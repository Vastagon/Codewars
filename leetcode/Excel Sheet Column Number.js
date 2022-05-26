var titleToNumber = function(columnTitle) {
    let counter = 0
    let sum = 0

    for(let i = columnTitle.length; i > 0 ; i--){
        sum = sum + ((columnTitle.charCodeAt(i-1) - 64) * (26 ** counter))
                
        counter++
    }

    return sum
};
