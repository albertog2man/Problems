
// ## Notes
// This function provides the correct result with the exception of arrays that have all the directions and for some reason don't reduce. Not sure why 

// ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"]

// reduces to []

// when 

// ["NORTH","WEST","SOUTH","EAST"]

// does not reduce.

// When in the first example, the second SOUTH is not adjacent to the second NORTH. Both examples don't displace the traveller spacially

function dirReduc(arr){
  let vert = 0;
  let horz = 0;
  let word = '';
  arr.forEach(function(dir){
    switch(dir){
      case "NORTH":
        vert += 1
        break;
      case "SOUTH":
        vert -= 1
        break;
      case "EAST":
        horz += 1
        break;
      case "WEST":
        horz -= 1
        break;
    }
  });
  
   if(horz < 0){
     horz *= -1;
     word = " WEST"
   } else {
     word = " EAST"
   }
  
   let horzArray = word.repeat(horz).split(' ').filter(Boolean);
  
  if(vert < 0){
     vert *= -1;
     word = " SOUTH"
   } else {
     word = " NORTH"
   }
  
   let vertArray = word.repeat(vert).split(' ').filter(Boolean);
   
  return vertArray.concat( horzArray )
}