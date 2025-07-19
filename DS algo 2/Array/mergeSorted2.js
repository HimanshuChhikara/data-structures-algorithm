function mergeSorted(nums1,m,nums2,n){
    let last = m + n - 1;
    let i = m - 1;
    let j = n - 1;

    while(j >= 0) {
        if(i >= 0 && nums1[i] > nums2[j]) {
            nums1[last--] = nums1[i--];
        }
        else {
            nums1[last--] = nums2[j--];
        }
    }
    console.log(nums1)
}
console.log(mergeSorted([10,20,20,40,0,0],3,[1,2],3))


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