function parition(arr) {
    let totalSum = arr.reduce((sum,num) => sum + num,0);

    let leftSum = 0;

    for(let i=0;i<arr.length-1;i++) {
        leftSum += arr[i];
        
        const rightSum = totalSum - leftSum;

        if(rightSum === leftSum) {
            return true;
        }
    }
    return false
}

console.log(parition([1,2,3,4,5,5]));