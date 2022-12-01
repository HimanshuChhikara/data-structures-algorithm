function searchRange(nums,target) {
    let res = [];
    // if(nums.length === 0) {
    //     return [-1,-1];
    // }
    // for(let i=0;i<nums.length;i++) {
    //     if(nums[i] === target) {
    //         if(res.length ===0 ) {
    //            res[0] = i;
    //            res[1] = i;
    //         }
    //         else {
    //             res[1] = i;
    //         }
    //     }
    //     else if(nums[i] > target) {
    //         break
    //     }
    // }

    if(nums.length === 1 && nums[0] === target) {
        return [0,0]
    }
    let start = 0;
    let end = nums.length - 1;

    while(start <= end ) {
        let mid = Math.floor((start + end) / 2);

        if(target === nums[mid]) {
            res.push(mid);
            start = mid + 1;
        } 
        else if(target < nums[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    if(res.length === 0) {
        return [-1,-1]
    }
    // if(nums.length === 1 && target === nums[0]) {
    //     res.push(0,0);
    // }
    return res;
}

console.log(searchRange([2,2],2));