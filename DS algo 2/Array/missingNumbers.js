function missingNumber(nums){
    nums = nums.sort((a,b) =>a-b)

    // var diff = nums[0] - 0
    // var res = []

    // for(var i=1;i<nums.length;i++){
    //     if(nums[i]-i != diff){
    //         while(diff < nums[i]-i){
    //             res.push(diff+i)
    //             diff++
    //         }
           
    //     }
    //     // console.log(res)
    // }
    // return res
    let res = [];

    for(let i=0;i<nums.length-1;i++) {
        if(nums[i]+1 != nums[i+1]) {
            res.push(nums[i]+1);
        }
    }
    return res;
    
}

var ans = missingNumber([1,2,4,5,7,9])
console.log(ans)