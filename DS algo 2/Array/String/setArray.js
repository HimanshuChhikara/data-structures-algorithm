function setArray(arr) {
    return [...new Set(arr)];


    
}

console.log(setArray([1,2,3,4,1,2,2]));