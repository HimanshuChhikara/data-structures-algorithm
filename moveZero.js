function moveZero(nums){
    var index =0;
    // console.log("value of num[index] " + nums[index++])
    for(var i=0;i < nums.length;i++){
        
        console.log("value of nums[i]"+nums[i])
        if(nums[i]!=0){
            nums[index++] = nums[i];
            // console.log(nums)
        }
    // console.log(nums)
    };
    var fill = nums.fill(0,index);
    // console.log(fill)
    console.log(nums)
}

moveZero([0,1,3,0,12])

// var moveZeroes = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = 0; j < nums.length; j++) {
//         if (nums[i] === 0) {
//           nums.push(nums.splice(i, 1)[0]);
//         }
//       }
//     }
//   };