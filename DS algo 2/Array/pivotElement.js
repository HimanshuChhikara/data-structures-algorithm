function piviotElement(nums) {
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


// rightSum = 27;

// left = leftSum + arr[i];
// right = righSum - arr[i];