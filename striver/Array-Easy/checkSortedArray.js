// Input: N = 5, array[] = {5,4,6,7,8}
// Output: False.
// Explanation: The given array is Not sorted i.e Every element in the array is not smaller than or equal to its next values, So the answer is False.

// Here element 5 is not smaller than or equal to its future elements.

function checkSorted(arr){

    for(let i = 1;i<arr.length;i++) {
        if(arr[i] < arr[i-1]) {
            return false
        }
    }
    return true

}

console.log(checkSorted([5,4,6,7,8]))