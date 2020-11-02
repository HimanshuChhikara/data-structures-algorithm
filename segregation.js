// function segregation(){
//     var arr = [0,1,0,1,0,0,1,0,0,1];
    
//     var Sort = arr.sort();

//     console.log(Sort);
// }

// var result = segregation();
// console.log(result);

// function segregation(arr){
//     // var arr = [0,1,0,1,0,0,1,1,1,0];
    
//     for(var i=0;i>=arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             var temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = temp;
//         }
//         // console.log(`${temp}`);
       
//     }
// }

// var result = segregation([0,1,0,1,0,0,1,1,1,0]);
// console.log(result);


function segregation(){
    var arr = [0,1,0,1,1,0,1,1,0,1,0,1,1,1,1]
    var arr2 = [];
    var count = 0;
    var len = arr.length;
    console.log(len + "length of arr");

    for(var i=0;i<len;i++){
        if(arr[i]== 1){
            // arr2.push
            arr2.push(1);
        }
        else{
            count ++;
        }
    }
    // console.log(`${arr2} + ${"second array"}`)  
    for(var j=0;j<count;j++){
        arr2.push(0);
    }
    console.log(arr2.length + "length of arr2")
    // console.log(arr2);
    return arr2;
}

var res = segregation();
console.log(res);