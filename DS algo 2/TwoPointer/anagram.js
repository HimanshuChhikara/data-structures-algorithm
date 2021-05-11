function countAnagram(s,t){
    let i = 0
    let j = 0
    var count = 0 

    if(s.length != t.length) return false

    while(i<s.length && j<t.length){
        if(s.charAt(i) == t.charAt(j)){
            i++
            count++
            j = 0
        }
        else{
            j++
        }
    }
    return count
}

console.log(countAnagram('anagram','nagaram'))