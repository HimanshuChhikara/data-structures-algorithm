function removeDuplicates(arr) {
    let res = new Set();
    for(let i=0;i<arr.length;i++) {
            res.add(arr[i])
    }
    let out = [...res]
    return out
}

console.log(removeDuplicates([1,1,1]))