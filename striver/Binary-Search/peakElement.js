function peakElement(nums) {
    if(nums.length === 1 || nums[0] > nums[1]) return 0

    if (nums[nums.length - 1] > nums[nums.length - 2]) {
        return nums.length - 1
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
            return i
        }
    }
}

console.log(peakElement([2,1]));