// function plusOne(arr){

//     var len = arr.length;
//     var empty = [];
//     for(var i = 0;i<len;i++){
//         empty.push(arr[i]);
//     }
//     do {
//         empty.push(arr[i])
//     } while (arr.length);
//     console.log(`${arr.length + 1}`)
// // return empty;
// console.log(empty)
// }

// plusOne([1,2,3]);

function plusOne(digits){
    for(let i =digits.length-1;i>=0;i--){
        if (digits[i]<9) {
            digits[i] = digits[i] + 1;
        }else{
            digits[i] = 0
        }
    }
    digits.unshift(1);
    // return digits
    console.log(digits)
}

plusOne([1,2,3])