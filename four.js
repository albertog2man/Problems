function isIsogram (str) {
  str = str.split('').map(function(char){
    return char.toLowerCase();
  });
  
  return str.length == new Set(str).size
}