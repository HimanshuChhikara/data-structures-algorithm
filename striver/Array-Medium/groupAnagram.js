function groupAnagram(strs) {
    let map = {}
    for(let s of strs) {
        let sortedS = s.split("").sort().join("");

        if(!map[sortedS]) {
            map[sortedS] = []
        }

        map[sortedS].push(s);
    }
    return Object.values(map)
}

console.log(groupAnagram(["act","pots","tops","cat","stop","hat"]))