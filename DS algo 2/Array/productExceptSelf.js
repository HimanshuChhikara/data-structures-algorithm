function productExceptSelf(nums) {

    let n = nums.length;
    let res = new Array(n).fill(1);

    for(let i=0;i<n;i++) {
        res[i] = res[i-1] * nums[i-1];
    }

    let postFix = 1;

    for(let j = n-1;j>=0;j--) {
        res[j] *= postFix;
        postFix += nums[j];  
    }
    return res;
}

console.log(productExceptSelf([1,2,3,4]));
