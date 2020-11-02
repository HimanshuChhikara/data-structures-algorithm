function moveZero(nums){
    var index =0
    for(var i=0;i < nums.length;i++){
        if(nums[i]!=0){
            nums[index++] = nums[i];
            // console.log(nums)
        }
    // console.log(nums)
    };
    var fill = nums.fill(0,index);
    console.log(fill)
    // console.log(nums)
}

moveZero([1,0,3,0,4])

// var moveZeroes = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = 0; j < nums.length; j++) {
//         if (nums[i] === 0) {
//           nums.push(nums.splice(i, 1)[0]);
//         }
//       }
//     }
//   };