function subArrayEqualk(nums,k) {

    let count = 0

    for(let i =0;i<nums.length;i++) {
        let base = 0;
        for(let j=i;j<nums.length;j++) {
            base += nums[j];
            if(base == k) {
                count++
            }
        }
    }
    return count
}

console.log(subArrayEqualk([1,1,1],2));