function mountain(arr) {
    for(let i =0;i<arr.length;i++) {
        if(arr[i] < arr[i+1] && arr[i+1] > arr[i+2]) {
            return false;
        }
        else {
            return true
        }
    }
}

console.log(mountain([1, 2, 3, 4, 9, 8, 7, 6, 5]));