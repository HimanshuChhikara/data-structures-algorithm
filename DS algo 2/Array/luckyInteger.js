var findLucky = function(arr) {
  var count = {}
  
  for(var i=0; i<arr.length; i++){
      var num = arr[i]

      count[num] = count[num] ? count[num] + 1 : 1

  }

  console.log(count)
};

console.log(findLucky([2,2,3,4,2]));