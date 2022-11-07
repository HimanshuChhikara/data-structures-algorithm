function productExceptSelf(nums) {
    let res = [];
    let product = 1;
    for(let i=0;i<nums.length;i++) {
        for(let j=0;j<nums.length;j++) {
            if(i === j) {
                continue;
            }
            else {
                product = product * nums[j];
            }
        }   
        res.push(product);
        product = 1;
    }
    return res;
}

console.log(productExceptSelf([1,2,3,4]));
