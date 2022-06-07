class Solution {
    solve(nums) {
        let counter = nums.length
        for(let i = 0; i < counter; i++){
            if(nums[i] === 0){
                nums.push(0)
                nums.splice(i,1)
                counter--
                i--
            }
        }
        return nums
    }
}
