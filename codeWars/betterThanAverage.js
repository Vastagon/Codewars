function betterThanAverage(classPoints, yourPoints) {
  let totalScore = 0
  classPoints.map(score =>{
    totalScore += score
  })
  totalScore = totalScore / classPoints.length
  
  if(yourPoints > totalScore){
    return true
  }else{
    return false
  }
}
