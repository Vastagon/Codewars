var isAnagram = function(s, t) {
    let nArray = s.split("")
    if(s.length !== t.length) return false
    
    for(let i = 0; i < t.length; i++){
        if(nArray.includes(t.substring(i,i+1))){
            nArray.splice(nArray.indexOf(t.substring(i,i+1)),1)
        }else{
            return false
        }
    }
    return true
};
