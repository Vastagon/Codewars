class Solution:
    def solve(self, n):
        if n <= 1:
            return n

        def condition(mid):
            return mid * mid <= n

        left, right = 0, n
        while left < right:
            mid = (left + right) // 2
            if condition(mid):
                left = mid + 1
            else:
                right = mid

        return left - 1
