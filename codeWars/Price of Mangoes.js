function mango(quantity, price){
  let additional = Math.floor(quantity / 3)
  quantity = quantity - additional
  let sum = quantity * price

  return sum
}
