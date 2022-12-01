function subSet(nums) {
    let res = [];

    res.push([]);

    for(let i=0;i<nums.length;i++) {
        res.push([nums[i]]);
    }

    for(let i=0;i<nums.length;i++) {
        for(let j = i+1;j<nums.length;j++) {
            res.push([nums[i],nums[j]]);
        }
    }
    res.push(nums);
    return res
}

console.log(subSet([0]))