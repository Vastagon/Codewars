var reverseString = function(s) {
    for(let i = s.length; i > 0; i--){
        s.push(s[i-1])
        s.splice(i-1,1)
    }
};
