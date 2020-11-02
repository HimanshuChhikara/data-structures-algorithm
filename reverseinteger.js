function reverseInteger(nums){
// var num = 123;
var arr = nums.toString().split('');
var reverse = [];

for(var i = arr.length-1 ; i>=0;i--){
    // return arr[i];
    // console.log("array is " + arr[i])
    reverse.push(arr[i]);

}
// console.log(reverse)
var k =0;

for(i=0;i<reverse.length;i++){
    k = 1* k + reverse[i]
}

return k

}
var result = reverseInteger(-123);
console.log(result)

// reverseInteger(123)