function findLongestband(nums){
    
   if(nums.length == 0) return 0
    
    var count = 1;
    var max = 1;

    nums.sort((a,b) => a-b)
    
    for(var i=0 ;i<nums.length ;i++){
        if(nums[i]-nums[i-1]==1){
            count = count + 1;
            max = Math.max(max,count);
        }
        else if(nums[i]==nums[i-1]) continue

        else{
            count = 1
        }

    }
    return max
}

var res = findLongestband([1,9,3,0,18,5,2,4,10,7,12,6])
console.log(res)