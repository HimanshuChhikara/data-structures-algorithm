let replaceElements = function(arr) {
    if(arr.length === 1) {
        return [-1];
    }
    let max
    for(let i =0;i<arr.length;i++) {
        max = arr[i+1]
        for(let j = i+1 ;j<arr.length;j++) {
            if(max < arr[j]) {
                max = arr[j];
            }
        }
        arr[i] = max
    }
    arr[arr.length-1] = -1;
    return arr;
};

console.log(replaceElements([400]))