function countString(s) {
    let count = 1;
    let res = ""

    for(let i=0;i<s.length;i++) {
        if(s[i] === s[i+1]) {
            count++
        }
        else {
            
            res += s[i] + count
            count = 1;
        }
    }
    return res;
}

console.log(countString("aaabbbbbbbuuuuuuuussssss"));