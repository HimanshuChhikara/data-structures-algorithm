// https://leetcode.com/problems/single-number/description/

function singleNumber(nums) {
    let hashMap = {};

    for(let i =0;i<nums.length;i++) {
        hashMap[nums[i]] = hashMap[nums[i]] + 1  || 1;
    }

    for(let key in hashMap) {
        if(hashMap[key] === 1) {
            return key;
        }
    }
}

console.log(singleNumber([1,2,1]))