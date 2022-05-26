var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start<=end) {
        const mid = Math.floor((start + end)/2);
        if(nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid -1;
        }   
    }
    return start;
};
