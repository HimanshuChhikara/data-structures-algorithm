let longestConsecutive = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
    if(nums.length === 1) {
        return 1;
    }
    nums.sort((a,b) => a-b)
    let count = 1;
    let max = 0;
    let pre = nums[0]
    for(let i=1;i<nums.length;i++) {

        if(pre + 1 === nums[i]){
            count++
        }
        else if(nums[i] != pre){
            count = 1;
        }
        pre = nums[i];
        max = Math.max(max,count);
    }
    return max;
};

console.log(longestConsecutive([1,2,0,1]));

// [ 1, 2, 3, 4, 100, 200 ]
