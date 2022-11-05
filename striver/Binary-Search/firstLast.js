function searchRange(nums,target) {
    let res = [];
    if(nums.length === 0) {
        return [-1,-1];
    }
    for(let i=0;i<nums.length;i++) {
        if(nums[i] === target) {
            if(res.length ===0 ) {
               res[0] = i;
               res[1] = i;
            }
            else {
                res[1] = i;
            }
        }
        else if(nums[i] > target) {
            break
        }
    }
    if(res.length === 0) {
        return [-1,-1]
    }
    return res;
}

console.log(searchRange([],0));