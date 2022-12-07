function searchRoated(nums,target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);

        if(nums[mid] === target) {
            return true;
        }
        if(nums[mid] === nums[start] && nums[mid] === nums[end]) {
            start++;
            end--;
        }

        else if(nums[mid] > nums[end]) {

            start = mid;
            
        }
        else {
            end = mid - 1;
        }

    }
    return false;
}

console.log(searchRoated([1,0,1,1,1],0))