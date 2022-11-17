function intersection(nums){
    let set = addtoSet(nums[0]);

    for(let i=0;i<nums.length;i++){
        let tempSet = addtoSet(nums[i]);

        for(let k of set) {
            if(!tempSet.has(k)) {
                set.delete(k)
            }
        }
    }
    let res = [...set];
    return res.sort((a,b) => a-b);
}

function addtoSet(nums) {
    let set = new Set(nums);
    return set;
}
console.log(intersection([[4,43,15,30,27,22],[15,30,43,27,10,4]]))