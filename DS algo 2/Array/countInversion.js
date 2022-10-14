function countInversion(arr) {
    let count = 0;
    let res = [];

    // for(let i = 0;i<arr.length; i++) {
    //     for(let j = i+1 ;j<arr.length ; j++) {
    //         if(arr[i] > arr[j]) {
    //             count++;
    //         }
    //     }
    // }
    // return count;
    arr.sort((a,b) => a-b);
    let i = arr.length - 1;
    let j = i - 1;

    while(i > j) {
        if(arr[i] > arr[j]) {
            count++
            j--;
        }
        if(j === null) {
            i--;
            j = i - 1
        }
    }
    return count;
}

console.log(countInversion([1, 20, 6, 4, 5]));

// [1,4,5,6,20];

// [1,2,4,8];