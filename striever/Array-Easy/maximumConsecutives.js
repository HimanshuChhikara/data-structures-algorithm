function findMaxConsecutiveOnes(arr) {

    let count = 0;
    let res = 0;

    for(let i=0;i<arr.length-1;i++) {
        if(arr[i]===1) {
            count++
        }
        else {
            count = 0
        }
        res = Math.max(res,count);
    }
    return res;
}

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))