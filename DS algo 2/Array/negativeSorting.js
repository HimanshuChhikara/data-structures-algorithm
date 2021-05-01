var negative = function(arr){
    var i = 0;
    var j = arr.length - 1;

    while(true){
        while(arr[i] < 0){
            i++
            while(arr[j]>=0){
                j--
                if(i<j){
                    var temp =  arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
                else
                break
            }
        }
    }
}

console.log(negative([1,2,3,4,21]))