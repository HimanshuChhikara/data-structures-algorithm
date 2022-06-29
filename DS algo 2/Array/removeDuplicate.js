var removeduplicate = function(nums){
    var len = nums.length

    for(var i = len-1;i>=0;i--){
        for(var j = i-1; j>=0 ; j--){
            if(nums[i] == nums[j]){
                nums.splice(j,1)
                console.log(nums)
            }
            else
            break
        }
    }
    return nums.length
}

console.log(removeduplicate([0,0,1,1,2,2,3]));