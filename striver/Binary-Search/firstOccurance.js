function firstOccurance(nums,target) {
    let i = 0;
    let j = nums.length - 1;
    let res = Number.MIN_VALUE
    while(i <= j) {
        let mid = parseInt((i+j)/2);

        if(nums[mid] === target) {
            res = Math.max(res,mid);
            i = mid + 1;
        }
        else if(nums[mid] < target) {
            i = mid + 1;
        }
        else {
            j = mid - 1;
        }
    }
    return res;
}

console.log(firstOccurance([2,4,10,10,10,18,20],10));