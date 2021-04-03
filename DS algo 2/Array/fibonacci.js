var fib = function(n){
    if(n == 0){
        return 0
    }
    if(n == 1){
        return 1
    }
var a = 0;
var b = 1;
var c
    for(var i = 2;i<=n;i++)
    {
        c = a + b
        a = b
        b = c
        
    }
    return b
}

console.log(fib(4));