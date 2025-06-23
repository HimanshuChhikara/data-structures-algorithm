function concat(nums) {
    let n = nums.length
    let result = new Array(2 * n)

    for(let i=0;i<n;i++) {
        result[i] = result[i+n] = nums[i]
    }
    return result
}

console.log(concat([1,2,3,4]));