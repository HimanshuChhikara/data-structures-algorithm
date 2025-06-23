function topKFrequent(nums,k) {
    let map = {}

    for(let num of nums) {
        if(map[num]) {
            map[num]++
        }
        else {
            map[num] = 1
        }
    }

    // const arr = Object.entries(map).map(([num,freq]) => [freq,parseInt(num)]);
    
    // arr.sort((a,b) => b[0] - a[0]);

    return map
}

console.log(topKFrequent([1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,3],2))