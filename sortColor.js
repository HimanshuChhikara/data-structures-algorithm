function sortColor(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while(mid <= high) {
        if(nums[mid] === 0) {
            [nums[mid],nums[low]] = [nums[low],nums[mid]];
            mid++;
            low++;
        }
        else if(nums[mid] === 2){
            [nums[mid],nums[high]] = [nums[high],nums[mid]];
            high--;
        }
        else {
            mid++
        }
    }

    return nums;
}

console.log(sortColor([2,0,1]))

// [0,0,2,1,1,2]

// [2,0,2,1,1,0]


