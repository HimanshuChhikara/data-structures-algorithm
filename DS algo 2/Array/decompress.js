function decompress(nums){
    const res = [];
    for(let i = 0; i < nums.length; i +=2) {
        const arr = new Array(nums[i]).fill(nums[i + 1]);
        res.push(...arr);
    }
    return res;
}

var res =  decompress([1,2,3,4]);
console.log(res)