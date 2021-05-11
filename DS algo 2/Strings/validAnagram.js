function validAnagram(s,t){
    const map = {}
    const map1 = {}
    for(let a of s) map[a] = (map[a] || 0) + 1 
    console.log(map)

    for(let a of t) map1[a] = (map1[a] || 0)
    console.log(map1)
}
console.log(validAnagram('caar','raac')) 