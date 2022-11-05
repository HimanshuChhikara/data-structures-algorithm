function sortColors(nums) {
    let low = 0;
    let high = nums.length - 1;
    let mid = 0;
    let temp = 0;

    while(mid <= high) {
        if(nums[mid] === 0) {
            temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;

            low++;
            mid++;
        }
        else if( nums[mid] === 1 ) {
            mid++
        }
        else if(nums[mid] === 2) {
            temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        }
        
    }
    return nums;

}

console.log(sortColors([2,0,2,1,1,0]));