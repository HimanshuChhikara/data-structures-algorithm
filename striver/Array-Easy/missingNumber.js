function findMissing(nums) {
    nums = nums.sort((a,b) => a-b);

    for(let i=0;i<nums.length;i++) {
        if(nums[i+1] != nums[i]+1) {
            return nums[i]+1
        }
    }
    // return nums;
}

console.log(findMissing([3,0,1]));