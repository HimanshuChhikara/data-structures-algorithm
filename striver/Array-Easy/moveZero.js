function moveZero(nums){
    let count = 0;

    for(let i=0;i<nums.length;i++) {
        if(nums[i] != 0) {
            let temp = nums[i];
            nums[i] = nums[count];
            nums[count] = temp;
            count++
        }
    }
    return nums;
}

console.log(moveZero([0,1,0,3,12]))