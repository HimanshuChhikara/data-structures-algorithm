function secondLargest(nums) {
    let largest = nums[0];
    let secondLargest = nums[0];

    for(let i=0;i<nums.length;i++) {
        if(nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i]
        }
        else if(nums[i] > secondLargest && nums[i] != largest) {
            secondLargest = nums[i];
        }
    }

    return secondLargest
}

console.log(secondLargest([1,2,4,7,7,5]))