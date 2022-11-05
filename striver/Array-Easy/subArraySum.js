// Input:
// arr = {7,1,6,0}, k = 7

// Output: Length of the longest subarray with sum K is 3
// Explanation:
//  1 + 6 + 0 = 7, it is the longest subarray with sum 7 and length 3.

function subArraywithSum(arr,k) {
   let maxLength = 0;

   for(let i=0;i<arr.length;i++) {
    let sum = 0;
    for(let j=i;j<arr.length;j++) {
        sum = sum + arr[j];
        if(sum === k) {
            maxLength = Math.max(maxLength,j-i+1)
        }
    }
   }
   return maxLength;
}

console.log(subArraywithSum([2,3,5,1,9],10))