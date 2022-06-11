class Solution {
    solve(nums) {
        if(nums[0] == nums[1]){
            return false
        }
        if(nums[0] > nums[1]){//Check for descending
            for(let i = 1; i < nums.length; i++){
                if(nums[i] <= nums[i+1]){
                    return false
                }
            }
        }else{///check for ascending
            for(let i = 1; i < nums.length; i++){
                if(nums[i] >= nums[i+1]){
                    return false
                }
            }
        }
        return true
    }
}
