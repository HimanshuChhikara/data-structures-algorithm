function factorial(num) {
    if(num == 1) return 1;

    let factNum = factorial(num - 1);
    let res = num * factNum;

    return num * factorial(num - 1)
    // return res

}

console.log(factorial(5));

// 5 * 4 * 3 * 2 * 1

// num2 4 num 5 res = 20
// num2 4 num 