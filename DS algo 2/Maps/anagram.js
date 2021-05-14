function ifAnagram(s,t){
    if(s.length !== t.length) return false
     
    let hashMapS = new Map()
    let hashMapT = new Map()

    for(let i = 0; i<s.length; i++){
        hashMapS.set(s[i],(hashMapS.get(s[i]) || 0) + 1)
        hashMapT.set(t[i],(hashMapT.get(t[i]) ||0 ) + 1)
    }
    console.log(hashMapS)
    console.log(hashMapT)

    for(values of hashMapS){
        if(hashMapT.get(values[0]) !== values[1]){
            return false
        }
    
    }
    return true

}

var res = ifAnagram("anagram","nagaram")
