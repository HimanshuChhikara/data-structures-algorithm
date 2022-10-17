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