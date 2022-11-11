function removeOuterParentheses (S) {
    let count = 0;
    let res = "";

    for(let i of S) {
        if(i === "(") {
            if(count) {
                res += i;
            }
            count++
        }
        else {
            count--;
            if(count) {
                res += i;
            }
        }
    }
    return res;
}

console.log(removeOuterParentheses("(()())(())"))