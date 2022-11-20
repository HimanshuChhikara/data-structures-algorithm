function rotatebyK(nums,k) {

    
    k %= nums.length
    function reverse(i,j) {
        while(i<j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j++;
        }
    }

    reverse(0,nums.length-1);
    reverse(0,k-1);
    reverse(k,nums.length-1)    
}

console.log(rotatebyK([1,2,3,4,5],3));