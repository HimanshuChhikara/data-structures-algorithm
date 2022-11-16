function intersection(nums1,nums2) {
   nums1 = nums1.sort((a,b)=> a-b)
   nums2 = nums2.sort((a,b)=> a-b)
   
   let i = 0
   let j = 0
   let res = []
   
   while(i<nums1.length && j<nums2.length){
       if(nums1[i] === nums2[j]){
           if(!res.includes(nums1[i])) res.push(nums1[i])
           i++
           j++
       }
            else if(nums1[i]<nums2[j]){
                i++
            }
       else {
           j++
            }
       }
         return res 
}

console.log(intersection([4,9,5],[9,4,9,8,4]));