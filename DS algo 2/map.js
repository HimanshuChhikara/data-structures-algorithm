function map(nums){

    var len = nums.length;
    var count = new Map();

    for(let num of nums){
     var result = count.set(num , 2)

     if(count.set(nums,1) == len){
     var answer = count.has(num) + 1;
     console.log(answer)
    //  return result
     }
    }
}

var result = map([1,2,3,4,5,6,5,6,6]);
console.log(result);