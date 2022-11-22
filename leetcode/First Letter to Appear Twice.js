/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let hashMap = new Map()
    
    for(let i = 0; i < s.length; i++){
        if(hashMap.has(s.substring(i,i+1))){
            return s.substring(i,i+1)
        }
        
        hashMap.set(s.substring(i,i+1), s.substring(i,i+1))
    }
};
