// Segregate 0 and 1 in a array
function segregation(){
    var arr = [0,1,0,1,1,0,1,1,0,1,0,1,1,1,1]
    var arr2 = []; // Create empty array 
    var count = 0;
    var len = arr.length;
    console.log(len + "length of arr");

    for(var i=0;i<len;i++){
        if(arr[i]== 1){ // if value is equal to 1 than push in second array
            // arr2.push
            arr2.push(1);
        }
        else{
            count ++; // else count the number of 0's
        }
    }
    // console.log(`${arr2} + ${"second array"}`)  
    for(var j=0;j<count;j++){
        arr2.push(0); // push as the number of zeroes left in count
    }
    console.log(arr2.length + "length of arr2")
    // console.log(arr2);
    return arr2;
}

var res = segregation();
console.log(res);