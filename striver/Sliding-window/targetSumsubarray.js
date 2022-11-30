function targetSum(nums) {
    let max = 0;
    let currentmax = 0;

    for(let i=0;i<nums.length;i++) {
        if(currentmax < 0) {
            currentmax = 0;
        }
        currentmax += nums[i];
        max = Math.max(max,currentmax);
    }

    return max;
}

console.log(targetSum([-2,1,-3,4,-1,2,1,-5,4]))