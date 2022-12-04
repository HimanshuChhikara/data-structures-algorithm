function minimumAverage(nums) {
    const n = nums.length;

    let leftSum = 0;
    let rightSum = 0;

    for(let i=0;i<n;i++) {
        rightSum += nums[i];
    }

    let minAvg = Infinity;
    let answer = -1;

    for(let i=0;i<n;i++) {
        leftSum += nums[i];
        rightSum -= nums[i];

        let res = Math.abs(Math.floor(((leftSum)/(i+1))) - Math.floor(((rightSum)/Math.max(1,(n-1-i)))));

        if(res < minAvg) {
            minAvg = res;
            answer = i;
        }
    }
    return answer;
}

console.log(minimumAverage([2,5,3,9,5,3]));