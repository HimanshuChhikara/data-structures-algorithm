function moveRepeated(arr) {
    let map = new Map();

    for(let i=0;i<arr.length;i++) {
        if(map.has(arr[i])) {
            let temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;
        }
        else {
            map.set(arr[i]);
        }
    }
    return arr;
}

console.log(moveRepeated([1,2,3,5,2,4]));