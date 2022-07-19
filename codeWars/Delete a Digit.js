function deleteDigit(n) {
  let highestNumber = parseInt(n.toString().substring(0,1))
  
  for(let i = 0; i < n.toString().length; i++){
    ///Sets variable for checking
    let newInt = parseInt(n.toString().replace(n.toString().substring(i,i+1), ''))

     ///Changes highest number if it's larger
    if(newInt > highestNumber){
      highestNumber = newInt
    }
  }
  
  return highestNumber
}
