function subArraywithSum(arr,k) {
    let res = [];

    for(let i=0;i<arr.length;i++) {
        for(let j=i;j<arr.length;j++) {
            let sum = arr[i] + arr[j];

            if(sum === k) {
                res.push([arr[i],arr[j]]);
            }
        }
    }
    return res;

}

console.log(subArraywithSum([1,1,1],2))