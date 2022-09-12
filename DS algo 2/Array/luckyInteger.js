// var findLucky = function(arr) {
//   var count = {}
  
//   for(var i=0; i<arr.length; i++){
//       var num = arr[i]

//       count[num] = count[num] ? count[num] + 1 : 1

//   }
//   console.log(count)

// };

// console.log(findLucky([2,2,3,4,2]));
var findLucky = function(arr){
  var map = new Map()
  var luckyvalue = -1

  for(let i of arr){
    console.log(i);
    
      map.set(i,map.get(i)+1 || 1)
      console.log(map)
  }

  console.log(map)
  for(let [key,value] of map){
    console.log("Value of [key,value] "+[key,value])
      if(key == value){
          if(value > luckyvalue){
              value = luckyvalue
          }
      }
  }
  return luckyvalue
}

console.log(findLucky([2,2,3,4]))
