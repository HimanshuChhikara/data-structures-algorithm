function luckyInteger(arr){
    const len = arr.length;
    var map = new Map();

    for(var i = 0;i<len;i++){
        map.set(i,arr[i])
    }
    // map.reduce((acc,it)=>{
    //     acc[it.i] = acc[it.i] + 1 || 1
    //     return acc    
    // })
    return map
}

console.log(luckyInteger([1,2,3,4,1]))