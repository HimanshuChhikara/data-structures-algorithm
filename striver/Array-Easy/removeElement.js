function removeElement(nums,val) {
    let res = []
    for(let i=0;i<nums.length;i++) {
        if(nums[i] != val) {
            res.push(nums[i]);
        }
    }
    return res;
}

console.log(removeElement([1,1,2,3,4],1))