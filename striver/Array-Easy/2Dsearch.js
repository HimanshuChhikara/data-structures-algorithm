function binarySearch2D(arr,target) {
    for(let i of arr) {
        for(let j of i) {
            if(j === target) return true
        }
    }
    return false;
}

console.log(binarySearch2D([[1,2,5,7],
    [10,11,16,20],
    [23,30,34,60]],3));