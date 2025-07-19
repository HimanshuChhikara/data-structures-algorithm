function fourSum(nums,target) {
    nums.sort((a,b) => a-b);
    let res = [];

    for(let i=0;i<nums.length;i++) {
        if( i> 0 && nums[i] === nums[i-1]) continue
        for(let j=i+1;j<nums.length;j++) {
            if(j > i+1 && nums[j] === nums[j-1]) continue

            let left = j + 1;
            let right = nums.length - 1;

            while(left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum === target) {
                    res.push([nums[i],nums[j],nums[left],nums[right]]);
                    left++
                    right--

                    while(left < right && nums[left] === nums[left - 1]) left++
                    while(left < right && nums[right] === nums[right + 1]) right--
                } 
                else if(sum < target) {
                    left++
                }
                else {
                    right--
                }
            }
        }
    }
    return res;
}
// [-2,-1,0,0,0,1,2];
console.log(fourSum([2,2,2,2,2],8));