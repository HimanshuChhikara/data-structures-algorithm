function maxSlidingWindow(nums,k) {
    let res = [];

    let left = 0;
    let right = k -1;

    while(right < nums.length) {
        let max = -Infinity;

        for(let i=left;i<=right;i++) {
            max = Math.max(max, nums[i]);
        }
        res.push(max);
        left++;
        right++;
    }

    return res;
}

console.log(maxSlidingWindow([1,2,1,0,4,2,6],3))