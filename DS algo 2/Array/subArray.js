function subArray(arr){
    var len = arr.length;

    for(var i = 0;i<len;i++){
        for(var j =i;j<len;j++){
            for(var k = i;k<j;k++){
                console.log(arr[k])
            }
            console.log()
        }
    }

}

console.log(subArray([1,2,3,4,5]))