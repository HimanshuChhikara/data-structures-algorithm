function maxSubarray(nums){
    if(nums.length == 0 ){
        return nums;
    }

    var currentMax = nums[0];
    var history = nums[0];

    for(var i=1;i<nums.length;i++){
        history = Math.max(history + nums[i], nums[i]);
        currentMax = Math.max(history,currentMax)
    }
    return currentMax;
}

// console.log(result);
const result = maxSubarray([ ]);
console.log(result)