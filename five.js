function decode (roman) {
  let result = 0;
  let romanArray = roman.split('');
  
  let orderArray = {
    M: 1000, D: 500, C: 100,
    L: 50, X: 10, V: 5, I: 1
  }
  
  for(i = 0; i <romanArray.length; i++){
    if(romanArray.length > i+1 && orderArray[romanArray[i]] < orderArray[romanArray[i+1]]) {
      result -= orderArray[romanArray[i]];
    } else {
      result += orderArray[romanArray[i]];
    }
  }
  
  return result;
}