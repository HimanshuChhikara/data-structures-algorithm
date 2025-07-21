function rotatebyK(nums,k) {
    k %= nums.length;

    function rotate(start,end) {
        while(start < end) {
            [nums[start],nums[end]] = [nums[end],nums[start]];
            start++;
            end--;
        }
    }

    rotate(0,nums.length-1);
    rotate(0,k-1);
    rotate(k,nums.length - 1);

    return nums

}

console.log(rotatebyK([1,2,3,4,5,6,7],5));