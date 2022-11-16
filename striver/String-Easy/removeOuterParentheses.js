function removeOuterParentheses (S) {
    let res = "";
    let count = 0;

    for(let i=0;i<S.length;i++) {
        if(S[i] === "(") {
            if(count) {
                res += S[i];
            }
            count++;
        }
        else {
            count--;
            if(count) {
                res += S[i];
            }
        }
    }
    return res;
}

console.log(removeOuterParentheses("(()())(())"))


// Check for the count;

// Make count as 0 and increse the count if s[i] === "("

// if there is count the append the res string

// else if the string is not equal to "(" 

// decrese the count and append the string because we need that ) parantheses as well

// so when the count will incease or decrease the word will also change
