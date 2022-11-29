function removeDuplicates(nums) {
    // let res = [];

    // let i = 0;
    // let j = 1;
    // let count = 0;
    // while(i<nums.length && j<nums.length) {
    //     if(nums[i] === nums[j]) {
    //         count++
    //         if(count <=2) {
    //             res.push(nums[i]);
    //         }
    //         j++
    //     }
    //     else {
    //         i = j;
    //         count = 0;
    //     }
    // }
    // return res;
    let left = 0, right = 0;

    while(left < nums.length){
        if(nums[left] !== nums[left + 2]) {
           nums[right] = nums[left];
           right++;
        }
        left++;
      }
      return right;
}

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));