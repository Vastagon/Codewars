var majorityElement = function(nums) {
    let hashMap = new Map()
    let largest = nums[0]
    hashMap.set(nums[0], 1)
    
    for(let i = 1; i < nums.length; i++){
        if(hashMap.has(nums[i])){
            hashMap.set(nums[i], hashMap.get(nums[i])+1)
        }else{
            hashMap.set(nums[i], 1)
        }
        
    
        if(hashMap.get(largest) < hashMap.get(nums[i])){
            largest = nums[i]
        }
        
    }
    
    return largest
};

///Key is the number, value is the amount the element appears

///Largest is the actual number, not the number of times
