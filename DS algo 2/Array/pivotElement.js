function piviotElement(nums) {
    let rightSum = 0;

    for(let i=0;i<nums.length;i++) {
        rightSum += nums[i];
    }
    
    let halfSum = rightSum / 2;

    let leftSum = rightSum;
    for(let j=nums.length-1;j>0;j--) {
        leftSum = leftSum - nums[j];

        if(leftSum < halfSum && nums[j] === nums[0]) {
            return j;
        }
    }
    return -1;

}

console.log(piviotElement([1,2,3]))