function reverseWords(s) {
    let word = "";
    let res = [];

    for(let i=0;i<s.length;i++) {
        if(s[i] === " ") {
            if(word) {
                res.unshift(word);
            }
            word = "";
        }
        else {
            word = word + s[i];
        }
    }
    if(word) {
        res.unshift(word);
    }
    return res.join(" ");
}

console.log(reverseWords("My Name is Himanshu"));