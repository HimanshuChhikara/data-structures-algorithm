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


// [0,1,0,3,12]
// [1,0,0,3,12]  count will be 1
// [1,3,0,0,12] count will be 2
// [1,3,12,0,0]
