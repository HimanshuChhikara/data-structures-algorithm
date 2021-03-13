// function missingnumber(arr){
//     var len = arr.length;
//     var N = arr.length + 1;

//     var sum = N * (N+1) / 2;
//     var sum2 = 0;
//     for(var i=0;i<len;i++){
//         sum2 += arr[i];
//     }
//     var result = sum -sum2;
//     return result;
//     // console.log(sum-sum2)
//     console.log(`This is sum2 ${sum2}`)
//     console.log(`This is Original Sum ${sum}`);
// }

// var answer = missingnumber([9,6,4,2,3,5,7,0,1]);
// console.log(answer)

var missingNumber = function(nums) {
    let missing = 0
    let sum1 = 0
    let sum2 = 0
    for(let i = 0;i<nums.length;i++){
      sum1+= nums[i]
      console.log(`Value of sum1 ${sum1}`);
      sum2+=i+1
      console.log(`value of sum2 ${sum2}`)
    }
    
    return sum2 - sum1
};

console.log(missingNumber([3,0,1]))