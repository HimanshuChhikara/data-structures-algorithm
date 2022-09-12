var IdenticalPairs = function(nums){
    var len = nums.length;
    var count = 0
    for(var i=0;i<len;i++){
        for(var j =i+1;j<len;j++){
            if(nums[i] === nums[j]){
                // empty.push(nums[i],nums[j]);
                count++;
        }
    }
}
return count
}

console.log(IdenticalPairs([1,2,3,1,1,3]));