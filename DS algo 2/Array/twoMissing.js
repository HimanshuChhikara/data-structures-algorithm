function twoMissing(){
    var arr = [4,3,2,7,8,2,3,1];
    var sorted = arr.sort();
    console.log(sorted);
    var len = arr.length;
    
    var MissingArray = [];

    for(var i =0;i<len;i++){
        let val = Math.abs(arr[i] - 1)
            if( arr[val] > 0 ){
                arr[val] = arr[val] * -1
            }
        console.log(arr[val]);
    }

    for(var i=0;i<len;i++){
        if(arr[i] > 0){
            MissingArray.push(i+1)
            // console.log(`This is MissingArray ${MissingArray}`)
        }
        // return MissingArray
    }
return MissingArray;
}

twoMissing()