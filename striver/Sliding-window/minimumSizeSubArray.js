// https://leetcode.com/problems/minimum-size-subarray-sum/description/

function minSubArrayLen(target,nums) {

    let i = 0;
    let j = 0
    let sum = 0;
    let len = Infinity
    while(j < nums.length) {
        sum = sum + nums[j];
        if(sum >= target) {
            len = Math.min(len,(j - i  + 1));
            i++;
            j = i;
            sum = 0;
        }else {
            j++;
        }
    }
    if(len === Infinity) return 0
    return len;
}


console.log(minSubArrayLen(7,[2,3,1,2,4,3]));

// sum = 0
// previousRes = 0;
// 2 + 1 = 3
res = -1
previousRes = 0
