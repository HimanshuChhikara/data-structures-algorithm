// Input: arr[] = {8,10,5,7,9};
// Output: 10
// Explanation: 10 is the largest element in the array. 

function findLargest(arr) {

    let largest = arr[0];

    for(let i =0;i<arr.length - 1;i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(findLargest([1,2,4,7,7,5]));