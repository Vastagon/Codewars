const sequenceSum = (begin, end, step) => {

  let sum = 0
  while(begin <= end){
    sum += begin
    begin += step
  }
  
  return sum
};
