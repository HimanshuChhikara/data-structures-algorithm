function rearrange(arr) {
    for(let i =0 ;i<arr.length;i ++) {
        if(i % 2 != 0) {
            let max = Math.max(arr[i+1],arr[i-1]);
            let index = arr[i+1] > arr[i-1] ? i+1 : i -1
            if(max > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[index];
                arr[index] = temp;
            }
        }
    }
    return arr;
}

let res = rearrange([1, 2, 3, 4, 5,900,1222, 6, 7, 9 , 8, 90,12,31]);
console.log(res);