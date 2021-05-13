function shuffle(nums1,nums2){
    
    let i = 0
    let j = 0
    var res = []
    while(i<nums1.length && j<nums2.length){
        res.push(nums1[i])
        res.push(nums2[j])
        i++
        j++
    }

    return res

    
}

console.log(shuffle([2,5,1],[3,4,7]))