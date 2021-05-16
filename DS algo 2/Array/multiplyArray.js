function multiply(arr){

    for(var i = 0;i<arr.length ;i++){
        var multiply = 1
        for(var j = 0;j<arr.length ;j++){
            multiply *= arr[j]
        }
        arr[i] = multiply
    }

    return arr
}

var resp = multiply([1,2,3,4,5])
console.log(resp)
