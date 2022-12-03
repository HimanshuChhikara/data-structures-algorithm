function singleNonDuplicate(nums) {
    // let map = {};

    // for(let i=0;i<nums.length;i++) {
    //     map[nums[i]] = map[nums[i]] + 1 || 1;
    // }

    // for(let key in map) {
    //     if(map[key] === 1) {
    //         return key
    //     }
    // }
    let i = 0;
    let j = nums.length - 1;

    while(i < j) {
        let mid = Math.floor((i+j)/2);
        if(mid % 2) mid--;
        if(nums[mid] === nums[mid+1]) i = i + 2;
        else j = mid;
    }

    return nums[i];
}

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));