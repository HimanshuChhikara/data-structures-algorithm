function moveZero(nums){
    let count = 0;

    for(let i=0;i<nums.length;i++) {
        if(nums[i] != 0) {
            [nums[i],nums[count]] = [nums[count],nums[i]] // this is swap
            count++
        }
    }
    return nums;
}

console.log(moveZero([0,1,0,3,12]))