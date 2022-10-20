function piviotElement(nums) {
    // let higherSum = 0;
    // let lowerSum = 0;
    // let i = 0;
    // let j = nums.length - 1;

    // while(i!=j) {
    //     lowerSum = lowerSum + nums[i];
    //     if(higherSum === lowerSum) {
    //         return i+1;
    //     }
    //     higherSum = higherSum + nums[j];
    
    //     i++;
    //     j--;
    // }
    // return -1;
    let leftSum=0,rightSum=0;
    for(let i=1; i<nums.length; i++){
        rightSum+=nums[i];
    }
    
    
    for(let i=0; i<nums.length; i++){
        let candidate = nums[i];
        if(leftSum === rightSum) return i;
        else{
            leftSum += candidate;
            rightSum -= nums[i+1]
        }

    }
    return -1
}

console.log(piviotElement([1,7,3,6,5,6]))