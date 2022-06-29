function reverseArray() {
    let arr = [1,2,3,4];
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

    let res = [];
    for(let i =0 ;i<len;i++){
        res.push(i);
    }
    return res;
}

var result = reverseArray();
console.log(result);