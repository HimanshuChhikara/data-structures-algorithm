function splitsing(s) {
    let countR = 0;
    let countL = 0;
    let finalCount = 0;

    for(let i=0;i<s.length;i++) {
        if(s[i] === 'R') {
            countR++
        }
        if(s[i] === 'L') {
            countL++
        }
        if(countL === countR) {
            finalCount++
        }
    }
    return finalCount;
}

console.log(splitsing('RLRRRLLRLL'));