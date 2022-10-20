// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums) {
    // let map = {};

    // for(let i=0;i<nums.length;i++) {
    //     map[nums[i]] = map[[nums[i]]] + 1 || 1;
    // }

    // let n = Math.round(nums.length / 2);
    // for(let key in map) {
    //     if(map[key] >= n) {
    //         return key;
    //     }
    // }

    let el = 0;
    let count = 0;

    for(let i=0;i<nums.length;i++) {
        if(count === 0) {
            el = nums[i]
        }
        if(el === nums[i]) {
            count++;
        }
        else {
            count--;
        }
    }
    return el;
}

console.log(majorityElement([2,2,1,1,1,2,2]))