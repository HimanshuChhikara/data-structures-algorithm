// function reverse(x){
// // var num = 123;
// var arr = x.toString().split('');
// var reverse = [];
// // var result = "";

// for(var i = arr.length-1 ; i>=0;i--){
    
//     // return arr[i];
//     // console.log("array is " + arr[i])
//     reverse.push(arr[i]);
//     result += reverse[i];

// }
// console.log(reverse)
// // console.log(result)
// var result = reverse.join("");
// if(x > 0){
// return -1*result
// }

// // var k =0;

// // for(i=0;i<reverse.length;i++){
// //     k = 1* k + reverse[i]
// // }

// // return k

// }
// var result = reverse(-123);
// console.log(result)

// // reverseInteger(123)

var res = function reverse(x){
    let intRev = ""
    let len = x.toString().length;
    for(let i= len;i>=0;i--){
        intRev = intRev + x[i]
        console.log(intRev)
    }
    return intRev
}

console.log(res(123));