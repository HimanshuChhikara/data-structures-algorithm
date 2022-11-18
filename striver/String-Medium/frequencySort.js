function frequencySort(s){
    let map = {};

    for(let i=0;i<s.length;i++) {
        map[s[i]] = map[s[i]] + 1 || 1;
    }

    let sortedString  = Object.keys(map).sort((a,b) => map[b] - map[a]);

    let res = "";

    for(let item of sortedString) {
        res += item.repeat(map[item]) 
    }

    return res;
}

console.log(frequencySort("Aabb"));