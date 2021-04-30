function power(x,n){
    if(n == 0){
        return 1
    }

    var num = power(x , n-1);
    var res = x * num;
    return res
}

console.log(power(3,4))