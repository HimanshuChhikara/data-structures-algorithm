function findSecondLarget(nums) {

    let largest = nums[0];
    let secondLargest = nums[0]

    for(let i=0;i<nums.length;i++) {
        if(nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        }
        if(nums[i] > secondLargest && nums[i] != largest) {
            secondLargest = nums[i];
        }
    }
    return secondLargest
}

console.log(findSecondLarget([2, 7, 4, 3, 0, 0, 0]))