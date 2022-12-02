function countA(arr,k) {
    let i = 0;
    let j = arr.length - 1;

    while(i <= j) {
        let mid = Math.floor((i + j)/2);

        if(arr[mid] === k) {
            return mid;
        }
        else if(arr[mid] < k) {
            i = mid + 1;
        }
        else {
            j = mid - 1;
        }
    }
    return -1;
}

function countOccurance(nums,k) {

    // Using linear serach;

    // let count = 0;
    // for(let i=0;i<nums.length;i++) {
    //     if(nums[i] === k) {
    //         count++
    //     }
    // }
    // return count;

    //Using Binary Search

    let ind = countA(nums,k);

    if(ind === -1) return 0;

    let count = 1;
    let left = ind - 1;

    while(left >= 0 && nums[left] === count) {
        count++;
        left--;
    }

    let right = ind + 1;
    while(right <k && nums[right] === count){
        count++;
        right++;
    }
    return count;
}

console.log(countOccurance([2, 2 , 3 , 3 , 3 , 3 , 4],3));