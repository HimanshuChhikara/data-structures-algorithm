function productExceptSelf(nums) {
    // let res = [];
    // let product = 1;

    // for(let i=0;i<nums.length;i++) {
    //     for(let j=0;j<nums.length;j++) {
    //         if(i === j) {
    //             continue;
    //         }
    //         else {
    //             product = product * nums[j]
    //         }
    //     }
    //     res.push(product)
    //     product = 1
    // }
    // return res;
    

    // Prefix sufix

    let n = nums.length;
    let res = new Array(n).fill(1);

    for(let i=1;i<n;i++) {
        res[i] = res[i-1] * nums[i -1];
    }

    console.log("RES ...",res);
    
    let postfix = 1;

    for(let j=n-1;j>=0;j--) {
        res[j] *= postfix;
        postfix *= nums[j]; 
    }
    return res;

}

console.log(productExceptSelf([1,2,3,4]));
