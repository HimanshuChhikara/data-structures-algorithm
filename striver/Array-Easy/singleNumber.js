// https://leetcode.com/problems/single-number/description/ 

function singleNumber(nums) {
    let map = {};

    for(let i=0;i<nums.length;i++) {
        if(!map[nums[i]]) {
            map[nums[i]] = 1
        }
        else {
            map[nums[i]]++;
        }
    }

    for(let k in map) {
        if(map[k] === 1) {
            return k
        }
    }
}

console.log(singleNumber([4,1,2,1,2]))