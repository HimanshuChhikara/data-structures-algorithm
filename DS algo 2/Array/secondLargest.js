function findSecondLargest(arr) {
    let largest = Math.max()
    let secondLargest 

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