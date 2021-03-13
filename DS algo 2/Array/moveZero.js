function moveZero(nums){
    var index =0;
    
    for(var i=0;i < nums.length;i++){
    
        if(nums[i]!=0){
    
            console.log(i);

            console.log("value of nums[i]" + nums[i])

            nums[index] = nums[i]

            index++

        }
    };
    
    var fill = nums.fill(0,index);
    console.log(nums)
}

moveZero([0,1,12,0,1])

// // var moveZeroes = function (nums) {
// //     for (let i = 0; i < nums.length; i++) {
// //       for (let j = 0; j < nums.length; j++) {
// //         if (nums[i] === 0) {
// //           nums.push(nums.splice(i, 1)[0]);
// //         }
// //       }
// //     }
// //   };

// function moveZero(nums){
//     var len = nums.length;
//     var right = 0;
//     var left = 0;
//     var temp ;

//  while(right<len){   
//     if(nums[right] == 0)
//         ++right
//     else
//     {
//         temp = nums[left];
//         nums[left]= nums[right];
//         nums[right] = temp
//         ++right;
//         ++left
//     }
//  }
// }

// var res = moveZero([1,0,1,0,2,0,3])
// console.log(res);