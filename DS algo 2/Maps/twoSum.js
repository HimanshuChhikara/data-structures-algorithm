var twoSum = function(nums,target){
    var newMap = new Map()
    for(let i = 0;i<nums.length;i++){
        if(newMap.has(target - nums[i])){
            console.log(newMap);
            return [newMap.get(target-nums[i],i)]
            console.log("This is newMap  "+newMap)
            console.log("Inside if")
        }
        else{
            console.log("inside else  "+newMap)
            newMap.set(nums[i],i);
        }
        console.log("THis is latest map =="+newMap.values)
    }
}

console.log(twoSum([1,2,3,6,1],7))