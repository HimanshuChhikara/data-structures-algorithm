// Input: [1,2,4,7,7,5]
// Output: Second Smallest : 2
// 	Second Largest : 5
// Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

function secondLargest(arr) {
    let largest = 0;
    let secondLargest = 0;

    for(let i=0;i<arr.length;i++) {

        if(arr[i] > largest) {
            secondLargest = largest; // 0  // 1  // 1 //4
            largest = arr[i];          // 1  // 2 //4 //7 //
        }
        else if(arr[i] > secondLargest && arr[i]!=largest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(secondLargest([1,2,4,7,7,5]));