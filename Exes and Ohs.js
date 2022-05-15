function XO(str) {
  let totalX = 0
  let totalO = 0
  
  for(let i = 0; i < str.length; i++){
    if(str.substring(i,i+1).toLowerCase() === "o"){
      totalO++
    }if(str.substring(i,i+1).toLowerCase() === "x"){
      totalX++
    }
  }
  if(totalO === 0 && totalX === 0) return true
  if(totalO === totalX) return true
  return false
}
