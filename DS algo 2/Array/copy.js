var arr = [1,2,3,4,5,8,6,9,7,10,11];
var arr2 = [];
for(var i = 0;i<arr.length;i++){
    arr2.push(arr[i])
}

arr2.sort((a,b) => a-b)


console.log(arr)
console.log(arr2)