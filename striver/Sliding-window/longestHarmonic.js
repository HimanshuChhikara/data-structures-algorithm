function longestHarmonic(nums) {

    const map = new Map()

    for(let num of nums) {
        map.set(num,(map.get(num) || 0) + 1);
    }

    let max = 0

    for(let [num,count] of map.entries()) {
        if(map.has(num+1)) {
            max = Math.max(max,count + map.get(num + 1));
        }
    }
    return max
}

// [1,2,2,2,3,3,5,7];



console.log(longestHarmonic([1,3,2,2,5,2,3,7]))