function mountain(arr) {
    let res = [];

    let i = 0;
    let j = arr.length - 1;

    while(i <= j) {
        if(i === j) {
            res.push(arr[j]);
            break;
        }
        res.push(arr[j]);
        j--;
        res.push(arr[i]);
        i++
    }
    return res;
}
console.log(mountain([2,4,6,8,10]));