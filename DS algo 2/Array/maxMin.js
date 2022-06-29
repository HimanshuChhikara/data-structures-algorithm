function findMaxMin(arr) {
    let minMax = [];
    let max 
    let min

    if(arr[0] > arr[1]) {
        minMax.max = arr[0];
        minMax.min = arr[1];
    }
    else {
        minMax.max = arr[1];
        minMax.min = arr[0];
    }


    for(let i = 2;i < arr.length;i++) {
        if(arr[i] > minMax.max) {
            minMax.max = arr[i]
        }
        else if(arr[i] < minMax.min) {
            minMax.min = arr[i];
        }
    }
    return minMax
}

let res = findMaxMin([1,2,3,4,1]);
console.log(res);