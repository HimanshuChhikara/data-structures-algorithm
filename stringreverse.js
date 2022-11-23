function reverseString(str) {
    let word = "";
    let res = [];
    for(let i=0;i<str.length;i++) {
        if(str[i] === " ") {
            if(word) {
                res.unshift(word);
                word = "";
            }
        }
        else {
            word += str[i];
        }
    }
    if(word) {
        res.unshift(word);

    }
    return res.join(' ');
}

console.log(reverseString("  hello world  "))