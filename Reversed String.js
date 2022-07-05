function solution(str){
  let nString = ""
  for(let i = str.length; i > 0; i--){
    nString = nString + str.substring(i-1,i)
  }
  return nString
}
