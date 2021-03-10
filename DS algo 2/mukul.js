function mukul(arr,value){
    var map = new Map();

    for(var i = 0;i<arr.length;i++){
        map.set(i,arr[i]);
        if(arr[i] == value){
            return i
        }
    }
    // if(map.has(i,arr[i]))
    //     return true
    // else
    //     return false
    

}

var res = mukul([1,2,3],3);
console.log(res)

/*
function mukul(arr){
    var len = arr.length;
    
    for(var i = 0;i<len;i++){
        if(i == arr[i])
        return true
        else
        return false
    }
}

var res = mukul([1,0,3,2])
console.log(res)
*/