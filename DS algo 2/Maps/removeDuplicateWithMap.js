function removeDuplicate(first){
    var res = [];
    var map = new Map(); //?
    

    for(var i = 0;i<first.length;i++){
    
        if(map.has(i)){
            res.push(first[i])
            console.log(res)
            return true
        }
        else{
        map.set(first[i],first[i])
            return false
        }
        
        
    }
    console.log(map);
}

const res = removeDuplicate([5,10,12,4,7,7]);
console.log(res)