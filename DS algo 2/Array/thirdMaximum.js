var thirdMax = function(nums) {
    let max = -1;
    let secondMax = -1;
    let thirdMax = -1;

    for(let i=0;i<nums.length;i++) {
        if(nums[i] > max) {
            max = nums[i];
            // secondMax = nums[i];
            // thirdMax = nums[i];
        }
        if(max > secondMax) {
            secondMax = max;
        }
        if(max > thirdMax && thirdMax > secondMax) {
            thirdMax = secondMax;
        }
    }
    return thirdMax;
};

console.log(thirdMax([3,2,1,7]));