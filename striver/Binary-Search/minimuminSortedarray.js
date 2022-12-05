/*
problem = find the minimum number in a array

Approach : We will divide the array into 2 parts and check the start number with the mid and if
start < mid

1. Find 

*/
function findMin(nums) {
    let start = 0;
    let end = nums.length - 1;

    while(start < end) {
        let mid = Math.floor((start + end) / 2);
        
        if(nums[mid] < nums[start]) {
            end = mid; 
        }
        else {
            start = mid + 1
        }

        // if(nums[mid] > nums[start]) {
        //     start = mid + 1
        // }
        // else {
        //     end = mid - 1 
        // }
    }
    return nums[start];
}

console.log(findMin([4,5,6,7,0,1,2]));