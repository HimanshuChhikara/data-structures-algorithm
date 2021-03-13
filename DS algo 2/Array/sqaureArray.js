var arr = [1,2,3,4];
var res = [];
for(var i =0;i<arr.length;i++){
  
    res.push(arr[i]*arr[i]);

}

var sum = 0;
for(var j=0;j<res.length;j++){
    sum = sum + res[j];
}
console.log(sum);


// console.log(sum);
console.log(res)



// for(var j=0;j<res.length;j++){
//     console.log(j);
// }
// console.log(res)