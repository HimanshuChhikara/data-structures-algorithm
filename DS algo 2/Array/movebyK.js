function movebyK(arr,k){
    k %= arr.length
    function reverse(i,j) {
        while(i<j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    reverse(0,arr.length-1);
    reverse(0,k-1);
    reverse(k,arr.length-1)  
}

console.log(movebyK([1,3,2,7,4,6],4));