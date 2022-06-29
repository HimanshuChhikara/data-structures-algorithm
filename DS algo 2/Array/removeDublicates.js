// remove dupliucates from an array
function remove(Arr){
    // var Arr = [1,2,2,3,4,5,2];
    var value = 2; // value that need to be removed
    var Result = [];

    var len = Arr.length;
//iterate through the array and check with each value if value is equal to that value
    for(var j =0;j<len;j++){
        if(Arr[j] != value){
            Result.push(Arr[j]);
        }
    }
    console.log(Result);
    console.log(Result.length);
}

remove([0,1,2,2,3,0,4,2])