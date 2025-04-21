function findMaxConsecutiveOnes(nums){
    let count = 0;
    let previousCount  = 0;

    for(let i=0;i<nums.length;i++) {
        if(nums[i] == 1) {
            count++
        }
        else {
            count = 0;
        }
        previousCount = Math.max(previousCount,count)
    }
    return previousCount
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));