function search(nums,target) {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        let mid = parseInt((low + high) / 2);

        if(nums[mid] === target) return mid;

        if(nums[low] <= nums[mid]) {
            if(target >= nums[low] && target <= nums[mid]) {
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }
        }
        else {
            if(target >= nums[mid] && target <= nums[high]) {
                low = mid + 1;
            }
            else {
                high = mid - 1
            }
        }
    }

    return -1
}

console.log(search([4,5,6,7,0,1,2],0));