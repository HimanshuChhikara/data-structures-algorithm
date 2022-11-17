function containDuplicate(nums,k) {
    // let i = 0;
    // let j = i+1;

    // while(i<nums.length) {
    //     let diff;
    //     if(nums[i] === nums[j]) {
    //         diff = Math.abs(j-i);
    //         if(diff <= k) {
    //             return true;
    //         }
    //         i++;
    //     }
    //     else {
    //         j++;
    //     }
    // }
    // return false;

    for(let i =0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(containDuplicate([1,0,1,1],1))