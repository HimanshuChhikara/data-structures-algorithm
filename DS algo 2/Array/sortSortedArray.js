function findUnsortedArray(nums){
   var b = nums.sort((a,b) => a-b);

   var i =0;
   var j = nums.length - 1;

   while(i < nums.length && nums[i] == b[i]){
       i++
   }

   while(j >=0 && nums[j] == b[j]){
        j--
   }

   if(i== nums.length){
       return [-1,-1]
   }
   
   return [i,j]
}

var response = findUnsortedArray([1,2,3,4,5,8,6,7,9,10,11]);
console.log(response)