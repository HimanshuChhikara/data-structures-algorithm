function findSecondLargest(arr) {
    let largest = arr[0]
    let secondLargest = -1;

    for(let i=0;i<arr.length;i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest
}

console.log(findSecondLargest([1,2,4,7,7,5]));