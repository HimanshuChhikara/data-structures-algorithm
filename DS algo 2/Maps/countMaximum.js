function countMaximum(s){
    var map = new Map()

    for(let i = 0; i<s.length ;i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    var max = 0
    for([key,values] of map){
        console.log([key,values])
        
    }

}

console.log(countMaximum("HimansHu"))