function rotateString(s,goal) {
    if(s === goal) return true;

    for(let i of s) {
        s = s.slice(1) + s.slice(0,1);
        if(s === goal) return true;
    }
    return false
}

console.log(rotateString("abcde","abced"));