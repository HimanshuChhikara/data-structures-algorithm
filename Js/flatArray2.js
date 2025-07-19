function flatArray(arr,depth=1) {
    let result = [];

    for(let i=0;i<arr.length;i++) {
        if(Array.isArray(arr[i]) && depth > 0) {
            result.push(...flatArray(arr[i],depth-1))
        }
    }
    return result;
}

console.log(flatArray([1,2,3,4,5,6,7,[8,9,10,[12,12,14]],11,12,13,[14,15]],1));