function mergeArray(nums1,nums2){
    var i=0;
    var j=0;
    var result = []
    while(i<nums1.length && j<nums2.length){
            if(nums1[i]<nums2[j])
        {
            result.unshift(nums1);
            i++
        }
        else if(nums2[j]<=nums1[i]){
            result.unshift(nums2[j])
            j++
        }
    }
    while(i<nums1.length){
        result.unshift(nums1[i])
        i++;
    }
    while(j<nums2.length){
        result.unshift(nums2[j])
        j++
    }

    nums1 = result
    console.log(nums1);
    console.log(result)   
}

const arr = mergeArray([1,2,3],[2,4,5]);
console.log(arr);
