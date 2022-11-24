let longestConsecutive = function(nums) {
    nums = nums.sort((a,b) => a-b);

    let first = nums[0];
    let count = 1;
    let max = 0;

    for(let i=0;i<nums.length;i++) {
        if(first + 1 === nums[i]) {
            count++
        }
        else {
            count = 1;
        }
        first = nums[i];
        max = Math.max(count,max);
    }
    return max;
};

console.log(longestConsecutive([3, 8, 5, 7, 6]));
// [3,5,6,7,8]
// [ 1, 2, 3, 4, 100, 200 ]
