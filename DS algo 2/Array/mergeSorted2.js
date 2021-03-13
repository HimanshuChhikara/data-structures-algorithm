function mergeSorted(num1,m,num2,n){
    var i,j = 0;
    var len1 = num1.length;
    var len2 = num2.length;
    var final = [];
    final.length = m +n;

    while(i<len1 && j<len2){
        if(num1[i]<num2[j]){
            final.push(num1[i]);
            i++;
        }
        else{
            final.push(num2[j]);
            j++;
        }
    }
    while(i<len1){
        final.push(num1[i]);
    }
    while(j<len2){
        final.push(num2[j]);
    }
return final;
}
console.log(mergeSorted([1,8,7],3,[6,9,11],3))


// var mergeSorted = function(num1,m,num2,n){
//     for(var i=0;i<n;i++){
//         num1[m+i] = num2[n];
//         console.log("Num1 value" + num1)
//         console.log("M value" + m);
//     }
//     return num1.sort(function(a,b){
//         return a-b;
//     })
// }

// console.log(mergeSorted([1,2,4,0,0,0],3,[2,3,4],3))