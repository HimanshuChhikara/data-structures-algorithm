var rearrangeArray = function(nums) {
   let negative = [];
   let positive = [];
   let output = [];

   for(let i =0;i<nums.length;i++) {
        if(nums[i] < 0) {
            negative.push(nums[i])
        }
        else {
            positive.push(nums[i]);
        }
   }
   let j = 0;
   let k = 0;

   while(j<negative.length && k<positive.length) {
        output.push(positive[k]);
        output.push(negative[j]);
        j++;
        k++
   }
   return output;
};

console.log(rearrangeArray([3,1,-2,-5,2,-4]))