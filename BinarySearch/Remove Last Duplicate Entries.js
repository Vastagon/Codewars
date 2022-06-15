class Solution {
    solve(nums) {
        let freq = {}
        for (let i = 0; i < nums.length; i++) {
            freq[nums[i]] = freq[nums[i]] + 1 || 1
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            if (freq[nums[i]] > 1) {
                freq[nums[i]] = 1
                nums.splice(i, 1)
            }
        }
        return nums
    }
}
