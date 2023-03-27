var number=function(array){
  //your awesome code here
  for(let i = 0; i < array.length; i++){
     let tempString = array[i]
     array[i] = `${i+1}: ${tempString}`
  }
  
  return array
}
