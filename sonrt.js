function findSmallestPositive(arr) {
    arr = arr.sort((a,b) => a-b);
    let res = 1;

    for(let i=0;i<arr.length;i++) {
        if(arr[i] == res) {
            res++
        }
        else if(arr[i] > res) {
            break;
        }
    }
    return res
}

console.log(findSmallestPositive([1,2,0,3]));