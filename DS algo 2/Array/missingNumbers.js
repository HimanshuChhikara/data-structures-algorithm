function missingNumber(nums){
    // var sort = nums.sort((a,b) =>)

    var diff = nums[0] - 0
    var res = []

    for(var i=1;i<nums.length;i++){
        if(nums[i]-i != diff){
            while(diff < nums[i]-i){
                res.push(diff+i)
                diff++
            }
           
        }
        // console.log(res)
    }
    return res
    
    
}

var ans = missingNumber([8,10,12,14,16])
console.log(ans)