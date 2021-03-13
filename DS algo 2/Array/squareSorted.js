var sortedSquares = function(nums){
    var len = nums.length;
    var arr = []
    for(var i=0;i<len;i++){
        arr.push(nums[i]*nums[i])
    }
    return arr.sort(function(a,b){
        return a-b
    })
}

console.log(sortedSquares([-4,-1,0,3,10]));