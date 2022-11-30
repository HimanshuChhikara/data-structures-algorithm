function beauty(s) {
    let res = [];

    for(let i=0;i<s.length;i++) {
        for(let j=0;j<=s.length;j++) {
            let str = s.substring(i,j);
            res.push(str);
        }
    }

    for(let i=0;i<res.length;i++) {
        let map = {};
        for(let j=0;j<res[i].length;j++) {
            map[res[i][j]] = map[res[i][j]] + 1 || 1;
        }
        
    }
    return res;
}

console.log(beauty('aabcb'));