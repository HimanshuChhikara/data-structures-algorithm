function binarySearch(nums,target) {
    let low = 0;
    let high = nums.length - 1;
    
    while(low < high) {
        let mid = parseInt((high + low) / 2);
        if(nums[mid] === target) {
            return mid;
        }
        if(nums[mid] < target) {
            low = mid + 1;
        }
        else { high = mid - 1};
    }
    return nums[high] === target ? high : -1;
}

console.log(binarySearch([-1,0,3,5,9,12],9))