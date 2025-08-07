function twoSum(numbers,target) {
    let start = 0;
    let end = numbers.length - 1;
    
    while(start < end) {
        let sum = numbers[start] + numbers[end];
        if(sum == target) {
            return [start + 1,end + 1];
        }
        else if(sum < target) {
            start++
        }
        else if(sum > target) {
            end--
        }
    }
}

console.log(twoSum([-1,0],-1))

