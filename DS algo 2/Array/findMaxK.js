function findMaxK(nums){
    let i = 0;
    let j = nums.length - 1;

    nums.sort((a,b) => a-b);

    while(i<j) {
        if(nums[i] * -1 > nums[j]) {
            i++;
        }
        else if((nums[i] * -1 < nums[j])) {
            j--;
        }
        else {
            return nums[j];
        }
    }

    return -1;
}

console.log(findMaxK([-1,10,6,7,-7,1]))