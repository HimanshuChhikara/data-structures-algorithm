function twoSum(nums,target) {
    let res = [];

    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            let sum = nums[i] + nums[j];

            if(sum === target) {
                res.push(i,j)
            }
        }
    }

    return res;
}

console.log(twoSum([2,7,11,15],9))