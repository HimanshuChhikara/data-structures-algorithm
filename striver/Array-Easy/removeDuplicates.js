// Input: arr[1,1,1,2,2,3,3,3,3,4,4]

// Output: arr[1,2,3,4,_,_,_,_,_,_,_]

// Explanation: Total number of unique elements are 4, i.e[1,2,3,4] and Therefore return 4 after assigning [1,2,3,4] in the beginning of the array.

function removeDuplicates(nums) {
    // let res = new Set();
    // for(let i=0;i<arr.length;i++) {
    //         res.add(arr[i])
    // }
    // let out = [...res]
    // return out

    for(let i=0;i<nums.length;i++) {
        if(nums[i] === nums[i+1]){
            nums.splice(i,1);
            i--;
        }
    }
    return nums

}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))


