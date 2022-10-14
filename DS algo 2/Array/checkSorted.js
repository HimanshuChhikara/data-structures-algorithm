function checkSorted(arr) {
    for(let i=1;i<arr.length;i++) {
        if(arr[i] < arr[i-1]) {
            return false
        }
    }
    return true
}

console.log(checkSorted([2,1]));

