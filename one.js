function withdraw(amount) {
  let result = [0,0,0];
  while(amount > 0){
    if(amount >= 100 && ( (amount - 50) % 20 && (amount - 20) % 50 )) {
      amount -= 100;
      result[0] += 1;
    } else if(amount >= 50 && !((amount - 50)%20)){
      amount -= 50;
      result[1] += 1;
    } else if(amount >= 20){
      amount -= 20;
      result[2] += 1;
    }
  }
  return result;
}