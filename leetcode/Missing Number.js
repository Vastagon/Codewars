var missingNumber = function(nums) {
    nums = nums.sort(function(a, b){return a-b});
    let expected = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== expected){
            return i
        }
        expected++
    }
    return expected
};
