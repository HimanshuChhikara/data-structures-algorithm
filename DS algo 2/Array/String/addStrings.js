function addStrings(num1,num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;

    let sum = [];
    let carry = 0;
   

    while(j >=0 || i >= 0 || carry) {
        let x = num1[i] || 0;
        let y = num2[j] || 0;
        
        let curSum = parseInt(x) + parseInt(y) + carry;
        let rem = curSum % 10;
        sum.push(rem);
        carry = curSum >= 10 ? 1 : 0;

        i--;
        j--;
    }
    return sum.reverse().join("");
}

console.log(addStrings("11","123"));