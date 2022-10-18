// Example 1:
// Input: arr[]= 1 2 3 4 5, num = 3
// Output: 2
// Explanation: 3 is present in the 2nd index

// Example 2:
// Input: arr[]= 5 4 3 2 1, num = 5
// Output: 0
// Explanation: 5 is present in the 0th index

// SOLUTION 1
// This is one solution where we find the each element and check for that number
// But this will take o(n) time complexity
function linearSearch(arr,num) {
    for(let i = 0;i<=arr.length;i++) {
        if(arr[i] === num) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([1,2,3,4,5],3));


