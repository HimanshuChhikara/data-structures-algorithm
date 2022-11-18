function findNobel(arr) {
    let i = 0;
    let j = 0;
    let count = 0;
    while(i<arr.length) {
        if(arr[i] < arr[j]) {
            count++;
        }
        if(j >= arr.length) {
            j = 0;
            if(count === arr[i]) {
                return arr[i];
            }
            count = 0;
            i++;
        }
        else {
            j++;
        }
    }
    return 0
}

console.log(findNobel([7, 3, 16, 10]));