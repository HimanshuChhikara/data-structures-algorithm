function rotatebyK(nums,k) {

    let i = 0;
    let j = k;

    while(j <= nums.length && i<=k) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j++;
    }
    return nums;
}

console.log(rotatebyK([1,2,3,4,5],3));