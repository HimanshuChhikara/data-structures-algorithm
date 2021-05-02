function power(x,n){
    if(n == 0){
        return 1
    }

    var pn1 = power(x,n/2);
    var res = pn1 * pn1

    if(n % 2){
        res = res * x
    }

    return res
}

console.log(power(2,5))