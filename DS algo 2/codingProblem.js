function findSum(arr,k){
    var len =  arr.length;
    var i = 0;
    var j = len - 1
    // var sum = 0
    while(i<j){
        if(arr[i]+arr[j] < k){
            i++
            console.log(i)
        }
        else if(arr[i]+arr[j]>k){
            j++
        }
        if(arr[i]+arr[j] == k){
           return [arr[i],arr[j]]
        }   
    }
    return false
    // console.log(sum)
    
}

var res = findSum([10,15,3,7],13)
console.log(res)