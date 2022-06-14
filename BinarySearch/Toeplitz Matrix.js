class Solution {
    solve(matrix) {
        const val = matrix[0][0];
        for (let i = 1; i < matrix.length; i++) {
            for (let j = 1; j < matrix[0].length; j++) {
                if (matrix[i][j] !== matrix[i - 1][j - 1]) {
                    return false;
                }
            }
        }
        return true;
    }
}
