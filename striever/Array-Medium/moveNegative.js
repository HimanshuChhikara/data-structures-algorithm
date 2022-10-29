var rearrangeArray = function(nums) {
   let negative = [];
   let positive = [];

   for(let i =0;i<nums.length;i++) {
        if(nums[i] < 0) {
            negative.push(nums[i])
        }
        else {
            positive.push(nums[i]);
        }
   }
   let countE = 0;
   let countO = 0;
   let count = 0;

   for(let j=0;j<nums.length;j++) {
    if(count % 2 === 0) {
        nums[count] = positive[countE];
        countE++
    }
    else{
        nums[count] = negative[countO];
        countO++;
    }
    count++
   }
   return nums;
};

console.log(rearrangeArray([3,1,-2,-5,2,-4]))