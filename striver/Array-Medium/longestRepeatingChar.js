function characterReplacements(s,k) {
    let charSet = new Set(s);
    let res = 0;

    for(let c of charSet) {
        let count = 0,l = 0
        for(let r = 0;r<s.length;r++) {
            if(s[r] === c) {
                count++;
            }

            while((r-l+1) - count > k) {
                if(s[l] === c) {
                    count--;
                }
                l++
            }
            res = Math.max(res,r-l+1);
        }

    }
    return res;
}

console.log(characterReplacements('XYYX',2))