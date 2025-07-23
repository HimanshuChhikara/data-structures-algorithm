function groupAnagram(strs) {
    const res = {}

    for(let s of strs) {
        const sortedS = s.split('').sort().join('');

        if(!res[sortedS]) {
            res[sortedS] = []
        }

        res[sortedS].push(s)
    }

    console.log("Res....",res)
    return Object.values(res)
}

console.log(groupAnagram(["act","pots","tops","cat","stop","hat"]))