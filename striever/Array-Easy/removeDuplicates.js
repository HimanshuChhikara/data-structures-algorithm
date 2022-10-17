// Input: arr[1,1,1,2,2,3,3,3,3,4,4]

// Output: arr[1,2,3,4,_,_,_,_,_,_,_]

// Explanation: Total number of unique elements are 4, i.e[1,2,3,4] and Therefore return 4 after assigning [1,2,3,4] in the beginning of the array.

function removeDuplicates(arr) {
    let res = new Set();
    for(let i=0;i<arr.length;i++) {
            res.add(arr[i])
    }
    let out = [...res]
    return out
}

console.log(removeDuplicates([1,1,1,2,2,3,3,3,3,4,4]))