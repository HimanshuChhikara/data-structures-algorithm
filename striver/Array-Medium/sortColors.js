function sortColors(nums) {

    // [2,0,2,1,1,0]

    let low = 0;
    let high = nums.length - 1;
    let mid = 0;

    while(mid <= high) {
        if(nums[mid] === 0) {
            [nums[mid],nums[low]] = [nums[low],nums[mid]];
            // [0,0,2,1,1,2]
            low++;
            mid++;
        }
        else if(nums[mid] === 1 ) {
            mid++
        }
        else if(nums[mid] === 2) {
           [nums[mid],nums[high]] = [nums[high],nums[mid]]
            // [0,0,2,1,1,2]
            // [0,0,1,1,2,2]
            high--;
        }
    }
    return nums;


    // NOT ACCEPTED IN LEETCODE

    // let low = 0;
    // let curr = 0;
    // let high = nums.length - 1;
    // let temp = 0;
    // while(curr <= high) {
    //     if(nums[curr]===0) {
    //        temp = nums[low];
    //        nums[low] = nums[curr];
    //        nums[curr] = temp;
    //     }
    //     if(nums[curr] === 2) {
    //         temp = nums[high];
    //         nums[high] = nums[curr];
    //         nums[curr] = temp;
    //         high--;
    //     }
    //     else {
    //         curr++;
    //     }
    // }
    // return nums;

}

console.log(sortColors([2,0,1]));