function arrayLeader(arr){

    let res = [];
    let max = -1;
    for(let i=arr.length-1;i>=0;i--) {
        if(arr[i] > max) {
            max = arr[i];
            res.push(arr[i])
        }
    }
    return res.reverse();
}

console.log(arrayLeader([10, 22, 12, 3, 0, 6]))