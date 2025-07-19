function threeSum(nums) {   
    const results = [];

    if(nums.length < 3) return results;

    nums = nums.sort((a,b)=> a-b);
    let target = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] > target) break
        if(i>0 && nums[i] === nums[i-1]) continue

        let j = i+1;
        let k = nums.length - 1;

        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];

            if(sum > 0) {
                k--
            }
            else if (sum < 0) {
                j++
            }
            else {
                results.push([nums[i],nums[j],nums[k]]);
                j++;
                k--;
                while(j<k && nums[j] === nums[j-1]) {
                    j++
                }
            }
        }
    }
    return results
}
// [-4,-1,-1,0,1,2]

// [3,2,3,-3,1,0]
// [-3,0,1,2,3,3]
console.log(threeSum([-1,0,1,2,-1,-4]));