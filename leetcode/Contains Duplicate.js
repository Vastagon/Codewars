var containsDuplicate = function(nums) {
    let diffMap = new Map()
    for(let i = 0; i < nums.length; i++){
        if(diffMap.has(nums[i])){
            return true
        }
        diffMap.set(nums[i],nums[i])
    }
    return false
};
