// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
 
function maxSubArray(nums) {
    let history = 0;
    let currentMax = 0;

    for(let i=0;i<nums.length;i++) {
        history = Math.max(history + nums[i],nums[i]);
        currentMax = Math.max(history,currentMax);
    }
    return currentMax;
}

console.log(maxSubArray([-2,-1]))