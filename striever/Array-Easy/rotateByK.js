function rotatebyK(nums,k) {

    let i = 0;
    let j = k + 1;

    while(j <= nums.length-1&& i<=k+1) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j++;
    }
    return nums;
}

console.log(rotatebyK([1,2,3,4,5,6,7],3));