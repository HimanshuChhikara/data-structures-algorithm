function factorial(n){
    
    if(n == 1){
        return res
    }

    var num =  factorial(n-1);
    var res = n * num
    return res;

}

console.log(factorial(5));