function smallerNumbersThanCurrent(nums){
    var res = []
    var count = 0

    for(let i =0; i<nums.length ;i++){
        for(let j=0 ;j<nums.length;j++){
            if(nums[i] == nums[j]) continue
            else if(nums[i] > nums[j]){
                count++
            }
        }
        res.push(count)
        count = 0
    }
    return res
}

var result = smallerNumbersThanCurrent([7,7,7,7])
console.log(result)