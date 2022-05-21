var maxProfit = function(prices) {
    let min = Number.MAX_SAFE_INTEGER
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < prices.length; i++){
        min = Math.min(min, prices[i])
        console.log(min)
        max = Math.max(max, prices[i] - min)
        console.log(max)

    }
    
    
    return max
};
