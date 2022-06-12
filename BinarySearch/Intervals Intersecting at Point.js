class Solution {
    solve(intervals, point) {
        let counter = 0
        for(let i = 0; i < intervals.length; i++){
            if(intervals[i][0] <= point && intervals[i][1] >= point){
                counter++
            }
        }

        return counter
    }
}
