function longestConsecutivetarget(nums,target) {
    let count  = 0;
    let sum = 0;
    let previousCount = 0;

    for(let i=0;i<nums.length;i++) {
        if(sum < target) {
            sum = sum + nums[i];
            count++
        }
        else {
            sum = 0;
            previousCount = Math.max(previousCount,count);
            count = 0
        }
    }
    return previousCount;
}

console.log(longestConsecutivetarget([1, 2, 3, 4, 5],9))