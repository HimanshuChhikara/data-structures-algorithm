function isSubsequence(s, t) {
    let i = 0;
    let j = 0;

    let res = ""

    while(i<s.length && j<t.length) {
        if(s[i] === t[j]) {
            res += s[i];
            i++;
            j++
        }
        else {
            j++;
        }
    }

    if(res === s) return true;
    

    return false;
}

console.log(isSubsequence("abc","ahbgdc"))