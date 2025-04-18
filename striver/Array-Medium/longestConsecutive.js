let longestConsecutive = function(nums) {
    if(nums.length < 1) return 0

    nums = nums.sort((a,b) => a-b);

    let max = 1;
    let count =1;


    for(let i=0;i<nums.length;i++) {
           if(nums[i]-nums[i-1] == 1) {
            count++;
            max = Math.max(max,count);
        }
        else if(nums[i] === nums[i-1]) continue
        else {
            count = 1
        }
    }
    return max
};

console.log(longestConsecutive([ 1, 2, 3, 4, 100, 200 ]));
// [3,5,6,7,8]
// [ 1, 2, 3, 4, 100, 200 ]

///[0,1,1,2]