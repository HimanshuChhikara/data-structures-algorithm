function merge(nums1,m,nums2,n) {

    let res = [];

    let i = 0;
    let j = 0;

    while(i < m || j < n) {
        if(nums1[i] < nums2[j]) {
            res.push(nums1[i]);
            i++;
        }
        else if(j === n) {
            res.push(nums1[i]);
            i++
        }
        else if(i === m) {
            res.push(nums2[j]);
            j++
        }
        else {
            res.push(nums2[j]);
            j++
        }
    }
    return res;
}

console.log(merge([0,0],0,[1,2],2));