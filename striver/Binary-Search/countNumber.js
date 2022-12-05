function countOccurance(nums,k) {
    let first = binaryFirst(nums,k);
    let last = binaryLast(nums,k);

    let res = (last - first) + 1;
    if(res < 0) return -1;
    return res;
}

function binaryFirst(nums,k) {
    let i = 0;
    let j = nums.length - 1;
    let res = 1000;

    while(i <= j) {
        let mid = Math.floor((i+j)/2);

        if(nums[mid] === k) {
            res = Math.min(res,mid);
            j = mid - 1;
        }
        else if(nums[mid] < k) {
            i = mid + 1;
        }
        else {
            j = mid -1
        }
    }
    return res;
}

function binaryLast(nums,k) {
    let i = 0;
    let j = nums.length - 1;
    let res = 0;

    while(i <= j) {
        let mid = Math.floor((i+j)/2);

        if(nums[mid] === k) {
            res = Math.max(res,mid);
            i = mid + 1;
        }
        else if(nums[mid] < k) {
            i = mid + 1;
        }
        else {
            j = mid - 1;
        }
    }
    return res;
}

console.log(countOccurance([5,7,7,8,8,10],8));