function reversePair(nums) {
    let count = 0

    for(let i = 0;i<nums.length;i++) {
        for(let j = i+1; j<nums.length;j++) {
            if(nums[i] > nums[j] * 2) {
                count++
            }
        } 
    }
return count;
}

console.log(reversePair([1,3,2,3,1]))