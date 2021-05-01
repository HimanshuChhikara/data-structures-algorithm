function findMaximum(arr){
    var len = arr.length;

    var max = arr[0];

    for(var i =0 ;i<len; i++){
        if(max <= arr[i]){
            max = arr[i]
        }
    }
    return max
}

console.log(findMaximum([100,2,-1,200,1223]));