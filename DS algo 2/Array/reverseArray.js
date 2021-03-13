function reverseArray() {
    var arr = [1,2,3,4];
    var len = arr.length
    var start = arr[0];
    var end =  arr[len -1 ]
    var temp ;
    while(start < end){
        temp = start;
        start = end;
        end = temp;
        
        start ++;
        end --;

    }

    for(var i =0 ;i<len;i++){
        console.log(arr[i] "\n");
    }

    
}

var result = reverseArray();
console.log(result);