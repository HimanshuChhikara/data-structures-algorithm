function findMaxsubarray(arr,k) {
    let i = 0;
    let j = 0;

    let sum = 0;
    let maxSum = 0; 
    while(j<arr.length) {
        sum = sum + arr[j];
        if((j-i+1) < k) {
            j++;
        }
        else if((j-i+1) === k) {
            maxSum = Math.max(maxSum,sum);
            sum = sum - arr[i];
            i++;
            j++;
        }

    }
    return maxSum;
}

console.log(findMaxsubarray([100, 200, 300, 400],2))