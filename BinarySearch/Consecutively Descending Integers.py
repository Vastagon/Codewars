class Solution:
    def solve(self, s):
        def helper(s, n):
            if s == "":
                return True
            if n < 0:
                return False
            sn = str(n)
            if s[: len(sn)] == sn:
                return helper(s[len(sn) :], n - 1)
            return False

        for l in range(1, len(s)):
            n = int(s[:l])
            if helper(s[l:], n - 1):
                return True
        return False
