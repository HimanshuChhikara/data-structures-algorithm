function mergeSorted(nums1,m,nums2,n){

    let mid = m -1;
    let left = n - 1;
    let right = m + n - 1;

    while(left >= 0) {
        if(mid >= 0 && nums1[mid] > nums2[left]) {
            nums1[right] = nums1[mid];
            mid--;
        }
        else {
            nums1[right] = nums2[left];
            left--
        }
        right--
    }

}
console.log(mergeSorted([10,20,20,40,0,0],3,[1,2],2))


// var mergeSorted = function(num1,m,num2,n){
//     for(var i=0;i<n;i++){
//         num1[m+i] = num2[n];
//         console.log("Num1 value" + num1)
//         console.log("M value" + m);
//     }
//     return num1.sort(function(a,b){
//         return a-b;
//     })
// }

// console.log(mergeSorted([1,2,4,0,0,0],3,[2,3,4],3))