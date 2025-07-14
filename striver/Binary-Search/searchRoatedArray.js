function search(nums,target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        console.log(mid)
        if(nums[mid] === target) return true;
        if(nums[left] < nums[mid]) { // Left Portion
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }
        else if(nums[left] > nums[mid]) {
            if(nums[right] < target && target <= nums[right]) {
                left = mid + 1
            }
            else {
                right = mid - 1
            }
        }
        else {
            left++;
        }
    }
    return false;
}

console.log(search([1,1,1,1,1,1,1,1,1,13,1,1,1,1,1,1,1,1,1,1,1,1],13));