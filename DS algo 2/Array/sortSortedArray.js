function findUnsortedArray(nums){

    var arr2 = [];
    for(var i = 0;i<nums.length;i++){
        arr2.push(nums[i])
    }

    arr2.sort((a,b) => a-b);
    console.log(nums);
    console.log(arr2)

   var i =0;
   var j = nums.length - 1;

   while(i < nums.length && nums[i] == arr2[i]){
       i++
   }

   while(j >=0 && nums[j] == arr2[j]){
        j--
   }
   if(i== nums.length){
    return [-1,-1]
}

   return [i,j]
}

var response = findUnsortedArray([2,6,4,8,10,9,15]);
console.log(response)