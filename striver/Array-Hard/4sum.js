function fourSum(nums,target) {
    nums = nums.sort((a,b) => a-b);

    let res = [];

    if(nums === null || nums.length === 0) return res;

    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            let firstSum = nums[i] + nums[j];

            let leftSum = target - firstSum;

            let front = j + 1;
            let back = nums.length - 1;

            while(front < back) {
                if(nums[front] + nums[back] === leftSum) {
                    res.push([nums[i],nums[j],nums[front],nums[back]]);
                    // while(front < back && nums[front] === res[2]) ++front;
                    // while(front < back && nums[back] === res[3]) --back;
                }
                else if(nums[front] + nums[back] < leftSum) {
                    front++;
                }
                else if(nums[front] + nums[back] > leftSum) {
                    back--;
                }
            }
            // while(j+1 < nums.length && nums[j+1] === nums[j]) ++j;
        }
        // while(i+1 < nums.length && nums[i+1] === nums[i]) ++i;
    }
    return res;
}
// [-2,-1,0,0,0,1,2];
console.log(fourSum([1,0,-1,0,-2,2],0));