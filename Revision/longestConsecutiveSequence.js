function longestConsecutiveSequence(nums) {
    if(nums.length < 1) return 0;
    nums = nums.sort((a,b) => a-b);

    let max = 1;
    let count = 1;

    for(let i=0;i<nums.length;i++) {
        if((nums[i] - nums[i-1]) == 1) {
            count++
            max = Math.max(max,count);
        }
        else if(nums[i] === nums[i-1]) continue;
        else {
            count = 1
        }
    }
    return max
}

// [2,3,4,4,5]

longestConsecutiveSequence([2,20,4,10,3,4,5])

