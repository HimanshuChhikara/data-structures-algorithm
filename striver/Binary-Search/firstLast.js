/*
Find first and last occurance of given target in sorted array

First we can find the first occurance and store into a variable 
then we can find the last occurance by taking setting last again to length - 1;

at last we can return array with contains start and end variables
*/

function searchRange(nums,target) {
    let i = 0;
    let j = nums.length - 1;

    // find start of number 

    while(i < j) {
        let mid = Math.floor((i+j) /2);

        if(nums[mid] >= target) {
            j = mid;
        }
        else {
           i = mid + 1 
        }
    }

    if(nums[i] !== target) return [-1,-1];

    let start = i;

    // find end

    j = nums.length - 1;

    while(i < j) {
        let mid = Math.floor((i+j) / 2);

        if(nums[mid] <= target) {
            i = mid + 1;
        }
        else {
            j = mid;
        }
    }
    let end = nums[i] === target ? i : i - 1

    return [start,end];
}

console.log(searchRange([5,7,7,8,8,10],8));