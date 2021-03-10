function findPrime(n){
    if(n == 1){
        console.log("Prime");
    }
    var flag;
    for(var i = 0;i<=n;i++){
        if(n%2)
            flag = 1
        else
        flag = 0
    }

    if(flag == 1)
        return ("Number is Prime");
    else
    {
        return "Number is not a Prime"
    }

}

var res = findPrime(24);
console.log(res);