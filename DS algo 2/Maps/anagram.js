function ifAnagram(s,t){
    if(s.length !== t.length) return false

    let map1 = new Map()
    let map2 = new Map()

    for(let i =0; i<s.length; i++){
        map1.set(s[i],map.get(s[i]+1 || 1))
        map2.set(t[i], map.get(s[j]+1 || 1))
    }
    if(map1.size !== map2.size) return false

    for(let [key,value] of map1) if (map2.get(key) != value) return false

    return true
}
