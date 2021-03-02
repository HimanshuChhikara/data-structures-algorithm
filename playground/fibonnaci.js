// var fib = function(n){
//     var n1 = 0 , n2 = 1, next;
//     console.log("value of n1 before " + n1);
//     console.log("value of n2 before " + n2)
//     // n1 = n2 
//     next = n1 + n2 // value of next is n1+n2 = 1;

//     if(n <=2){
//         // n1 = n2;
//         next = n1+n2;
//         return next
//         console.log("value of next inside n")
//     }
    
//     while(next<=n){ //condition is 1<=2 i.e true

//         // console.log(next);

//         n1 = n2; // value of n1 is 1 
//         n2 = next; // value of n2 is 1              
//         next = n1 + n2; //value of 
//         console.log("next =="+next)
        
//     }
//     // return next
// }

// console.log(fib(3))

var fib = function(n){
    if(n<=1){
        return 1
    }
        return fib(n-1) + fib(n-2)
   

}

console.log(fib(3))