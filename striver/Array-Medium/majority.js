// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums) {
    // let map = new Map();
    // let arr = [];
    // for (let n of nums) {
    //     map.set(n,map.get(n)+1 || 1);
    // }    
    // console.log("Map is == ",map)
    // for (let [key,value] of map){
    //     if (value > Math.floor(nums.length/3)) {
    //         arr.push(key);
    //     }
    // }
    // return arr;

    let count = 0;
    let candidate;

    for(let i=0;i<nums.length;i++) {
        if(count === 0) {
            candidate = nums[i];
        }
        if(candidate === nums[i]) {
            count++;
        }
        else {
            count--;
        }
    }
    return candidate;
}

console.log(majorityElement([3,2,3]))