var twoSum = function(nums, target) {
    let diffMap = new Map()
    for(let i = 0; i < nums.length; i++){
        if(diffMap.has(target-nums[i])){
            return [diffMap.get(target-nums[i]),i]
        }
        
        diffMap.set(nums[i],i)
    }
    
};
