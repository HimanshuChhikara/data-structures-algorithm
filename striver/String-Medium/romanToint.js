function romanToInt(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let res = 0;
    for(let i=0;i<s.length;i++) {
        let first = s[i];
        let second = s[i+1];
        
       if(roman[first] < roman[second]) {
            res = res - roman[first]
       }
       else {
        res = res +  roman[first]
       }

    }
    return res;
}

console.log(romanToInt('MCMXCIV'))