function majorityElement(nums) {
    let count1 = 0;
    let count2 = 0;
    let num1 = -1;
    let num2 = -1;

    for(let i=0;i<nums.length-1;i++) {
        if(i === num1) {
            count1++;
        }
        else if(i === num2) {
            count2++;
        }
        else if(count1 === 0) {
            num1 = nums[i];
            count1 = 1;
        }
        else if(count2 === 0) {
            num2 = nums[i];
            count2 = 1;
        }
        else  {
            count1--;
            count2--;
        }
    }
    console.log(num1);
    console.log(num2);

}

console.log(majorityElement([3,2,3]))