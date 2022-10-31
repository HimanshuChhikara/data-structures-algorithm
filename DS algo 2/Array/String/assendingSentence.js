var areNumbersAscending = function(s) {
    let res = [];

    s = s.split(' ').filter(x => Number.isInteger(Number(x))).map((x => Number(x)))
    
    for(let i=0;i<s.length-1;i++) {
        if(s[i] >= s[i+1]) {
            return false;
        }
    }

    return true;
};

console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"))