function sortCsvColumns (csv_data) {
  let rows = csv_data.split("\n");
  let headers = rows[0].split(',');
  let obj = {};
  let values;
  let result;
  rows.shift();
  
  for(i = 0; i < headers.length; i++){
    for( j = 0; j < rows.length; j++){
      values = rows[j].split(',');
      if(obj[headers[i]]){
        obj[headers[i]].push(values[i]);
      } else {
        obj[headers[i]] = [values[i]];
      }
    }
  }
  
  result = headers.sort(function(a,b){
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a === b){
      return 0;
    }
    return a < b ? -1 : 1;
  }).join(",") + "\n"
  
  for(j = 0; j < rows.length; j++){
    for(i = 0; i < headers.length; i++){
      result += obj[headers[i]][j]
      if(i + 1 != headers.length ) {
        result += ','
      } else if(j + 1 != rows.length){
        result += '\n'
      }
      
    }
  }
  
  return result
}