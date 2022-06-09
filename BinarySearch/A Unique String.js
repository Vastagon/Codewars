class Solution {
    solve(s) {
        let i = 0
        let array = []
        ///Create an array that holds all previous original letters
        if(s.length <= 1){
            return true
        }
        while(i < s.length){
            array.push(s.substring(i,i+1))
            i++
        }
        for(let i = 0; i < s.length; i++){
            for(let j = i+1; j<s.length; j++){
                if(array[i] == array[j]){
                    return false
                }
            }
        }
        
        return true
    }
}
