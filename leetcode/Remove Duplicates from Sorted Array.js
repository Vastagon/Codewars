var removeDuplicates = function(nums) {
    let diffMap = new Map()    
    for(let i = 0; i < nums.length; i++){
        if(diffMap.has(nums[i])){
            nums.splice(i,1)
            i--
        }else{
            diffMap.set(nums[i], nums[i])
        }
        
    }
    
    return nums.length
};
