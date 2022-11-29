function countDistinctIntegers(nums) {
    let res = [];

    nums.map((num) => {
        let numb = num.toString().split('').reverse().join('') * Math.sign(num);
        res.push(numb);
    })

    nums.push(...res);
    return [...new Set(nums)].length;
}

console.log(countDistinctIntegers([1,13,10,12,31]))