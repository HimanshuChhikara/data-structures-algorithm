let findTheDifference = function(s, t) {
    let sMap = {};
    for(let i=0;i<s.length;i++) {
        sMap[s[i]] = sMap[s[i]] + 1 || 1;
    }

    for(let char of t) {
        if(sMap[char] != undefined && sMap[char] > 0) {
            sMap[char]--;
        }
        else {
            return char;
        }
    }
};

console.log(findTheDifference("abcd","abcde"))