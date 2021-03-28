// var countPrime = function(n){
//     var arr = []

//     if(n == 0 && n == 1){
//         return 0
//     }
//     // var counter = n
//     for(var i = 2; i< n ; i++){
//         if( n % i == 0){
//             console.log("value of i "+i);
//             arr.push(i)
//         }
//         console.log(arr)
//     }
//     console.log("Outside For loop " + arr);
//     return arr.length;

// }

// console.log(countPrime(0));

var countPrime = function(n){
    if(n == 0 && n == 1){
        return 0
    }

    var arr = []
    var res = []
    for(var i=3;i<n;i++){
        arr[i] = 1
        res.push(i)
    }

    for(var j = 3;j<n;j+=2){
        for(var k = i*i;k<n;k=k+1){
            arr[k] = 0
            res.push(k)
        }
    }
    return res
}

console.log(countPrime(10))