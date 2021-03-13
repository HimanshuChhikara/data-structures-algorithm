// function removeDublicate(){
//     var A = [1,1,2,3,3,4];
//     var empty = []
//     if(A.length == 0){
//         return 0
//     }
//     var i = 0
//     for(var j =1;j<=A.length;j++){
//         if(A[j]!=A[i]){
//             i++;
//             A[i]=A[j];
//             empty.push(i);
//         }
//     }
//     console.log(empty);
//     return i ;
    
// }

// var result = removeDublicate();
// console.log(result);

function remove(Arr){
    // var Arr = [1,2,2,3,4,5,2];
    var value = 2;
    var Result = [];

    var len = Arr.length;

    for(var j =0;j<len;j++){
        if(Arr[j] != value){
            Result.push(Arr[j]);
        }
    }
    console.log(Result);
    console.log(Result.length);
}

remove([0,1,2,2,3,0,4,2])