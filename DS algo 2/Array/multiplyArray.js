function multiply(arr){

    // var res = []
    for(var i = 0; i<arr.length; i++){
        var mult = 1
        for(var j = 0; j<arr.length; j++){
            if(i == j) {
                continue
            }
            else{
                mult = mult * arr[j]
            }
        }
        arr[i] = mult
    }
    return arr
}

var resp = multiply([1,2,3,4,5])
console.log(resp)
