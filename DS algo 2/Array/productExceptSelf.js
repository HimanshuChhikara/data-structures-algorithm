function productExceptSelf(nums) {
    let res = [];
    let product = 1;
    // for(let i=0;i<nums.length;i++) {
    //     for(let j=0;j<nums.length;j++) {
    //         if(i === j) {
    //             continue;
    //         }
    //         else {
    //             product = product * nums[j];
    //         }
    //     }   
    //     res.push(product);
    //     product = 1;
    // }

    let i = 0;
    let j = 0;

    while(i <= j) {
        if(i === j) {
            j++;
        }
        else {
            product = product * nums[j];
            j++
        }
        if(j === nums.length) {
            res.push(product)
            product = 1;
            i++;
            j=0;
        }
    }
    return res;
}

console.log(productExceptSelf([1,2,3,4]));
