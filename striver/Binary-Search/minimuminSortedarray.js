/*
problem = find the minimum number in a array

Approach : We will divide the array into 2 parts and check the start number with the mid and if
start < mid

1. As the array is rotated and sorted before rotataion. So we will check if our mid is greater than the last index
if out mid is greater and last index is small then we can say right half contains smaller numbers

2. If mid is smaller than end of the array then we can say right side have larger numbers compared to mid

3. in this case we can nums[mid] > nums[end]   then we can have to check only in right side of array
for that we can move our start to mid + 1 and let end be at same postion

4. If nums[mid] < nums[end]  than our number lies in left half so we will move end to mid;

5. moving like this our start will point to the minimnum number

*/
function findMin(nums) {
    let start = 0;
    let end = nums.length - 1;

    while(start < end) {
        let mid = Math.floor((start + end) / 2);
        
        if(nums[mid] > nums[end]) {
            start = mid + 1;
        }
        else {
            end = mid;
        }
    }
    return nums[start];
}

console.log(findMin([4,5,6,7,0,1,2]));