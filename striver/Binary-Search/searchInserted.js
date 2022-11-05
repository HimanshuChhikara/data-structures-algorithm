function searchInserted(nums,target) {
    
   let low = 0;
   let high = nums.length - 1;

   while(low < high) {
        let mid = Math.floor((low+high) /2);

        if(mums[mid] === target) {
            return mid;
        }

        if(nums[mid] > target) {
            high = mid + 1;
        }
        else {
            low++
        }
   }
   return low
}

console.log([1,3,5,6],5);
