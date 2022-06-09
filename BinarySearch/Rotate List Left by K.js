class Solution {
    solve(nums, k) {
        let newArray = []
        for(let i = k; i < nums.length; i++){
            newArray.push(nums[i])
        }
        for(let i = 0; i < k; i++){
            newArray.push(nums[i])
        }
        return newArray
    }
}
