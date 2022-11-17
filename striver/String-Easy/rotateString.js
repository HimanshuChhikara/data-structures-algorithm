function rotateString(s,goal) {
    let i = 0;
    let j = 0;

    while(j < goal.length) {
        if(s[i] != goal[j]) {
            i++;
        }
        if(s[i] === goal[j]) {
            i++;
            j++;
        }
        if(i === s.length) {
            i = 0;
        }
        if(j === goal.length) {
            return true
        }
    }
    return false;
}

console.log(rotateString("abcde","cdeab"));