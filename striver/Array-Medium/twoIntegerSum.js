function twoIntegerSum (numbers,target) {

    let i = 0;
    let j = numbers.length - 1;

    while(i < j) {
        let sum = numbers[i] + numbers[j];

        if(sum == target) {
            return [i+1,j+1]
        }
        if(sum > target) {
            j--
        }
        if(sum < target) {
            i++
        }
    }
}

console.log(twoIntegerSum([1,2,3,4],3))