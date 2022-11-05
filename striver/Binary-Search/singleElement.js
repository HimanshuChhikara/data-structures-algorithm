function singleNonDuplicate(nums) {
    let map = {};

    for(let i=0;i<nums.length;i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;
    }

    for(let key in map) {
        if(map[key] === 1) {
            return key
        }
    }
}

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));