function getMiddle (str) {
  
  let start;
  let result
  
  if(str.length % 2 === 1){
    start = str.length / 2;
    result = str.substring(start, start + 1);
  } else {
    start = str.length / 2 - 1
    result = str.substring(start, start + 2);
  }
  
  return result
  
}