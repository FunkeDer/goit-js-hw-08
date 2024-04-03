function isEnoughCapacity(products, containerSize){
  let productAmount = Object.values(products)
  let sum = 0;
  for(let product of productAmount){
    sum +=product
  }
  if(sum <= containerSize){
    return true
  }else{
    return false
  }
}