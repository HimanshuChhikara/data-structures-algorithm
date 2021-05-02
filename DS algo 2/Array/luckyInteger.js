var findLucky = function(arr) {
  var count = {}
  
  for(var i=0; i<arr.length; i++){
      var num = arr[i]

      count[num] = count[num] ? count[num] + 1 : 1

  }
  let max = -1;
  for(let res in count){
      if(Number(res) === count[res] &&  Number(res)> max) max= Number(res)
  }
  return max
};

console.log(findLucky([2,2,3,4,2]));