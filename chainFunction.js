function chainFunction(val1){
    console.log(val1);
     var res = function(val2 = val1 *2){
        console.log(res)
        return function(val3 = val2 *3){
            return val1+val2+val3
        }
    }
}

console.log(chainFunction(4));