function isValid(s) {

    let res = [];

    for(let char of s) {
        if(res[res.length - 1] === '(' && char === ")") {
            res.pop()
        }
        else if(res[res.length - 1] === '{' && char === "}") {
            res.pop()
        }
        else if(res[res.length - 1] === '[' && char === "]") {
            res.pop()
        }
        else {
            res.push(char);
        }
    }

    return res.length > 0 ? false : true;


}

console.log(isValid("([{}])"))

// ['(','[',')']

// [];



