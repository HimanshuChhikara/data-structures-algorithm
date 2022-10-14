function mergeSortedArray(left,right,arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while(i<left.length && j<right.length) {
        if(left[i] <= right[j]) {
            arr[k] = left[i];
            i++
        }
        else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while(j < right.length) {
        arr[k] = right[j];
        j++;
        k++
    }

    while(i < left.length) {
        arr[k] = left[i];
        k++;
        i++;
    }

    return arr;
}

function mergeSort(arr) {

    let mid = Math.round(arr.length/2);
    if(arr.length < 2) {
        return;
    }
    let left = [];
    let right = [];
    for(let i=0;i<mid;i++) {
        left.push(arr[i]);
    }

    for(let j = mid;j<arr.length;j++) {
        right.push(arr[j]);
    }

    mergeSort(left);
    mergeSort(right);
    mergeSortedArray(left,right,arr);

    return arr;
}

console.log(mergeSort([200,300,100,12,1000,30] ));