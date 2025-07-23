function reverseWord(str) {

    let word = "";
    let res = [];

    for(let i=0;i<str.length;i++) {
        if(str[i] === " ") {
            res.unshift(word);
            word = "";
        }
        else {
            word += str[i];
        }
    }

    word && res.unshift(word);
    
    return res.join(" ")
}

console.log(reverseWord("the sky is blue"));