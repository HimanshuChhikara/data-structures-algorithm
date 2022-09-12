var climbStairs = function(n){
    if(n ==1 || n ==0){
        return 1
    }

    let a = 1;
    let b = 2;
    var c;
    for(var i =3;i<=n;i++){
        c = a + b;
        console.log(c)
        a = b;
        b = c
    }
    console.log("value of a "+a)
    return b
}

console.log(climbStairs(6))