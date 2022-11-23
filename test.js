// "this is sky"

// "sky is this"


function reverseString(str) {
    let word = "";
    let res = [];
    for(let i=0;i<str.length;i++) {
        if(str[i] === " ") {

            word && res.unshift(word)
            word = "";
        }
        else {
            word += str[i];
        }
    }
    word && res.unshift(word)
    return res.join(' ');
}

console.log(reverseString("this is sky"))
