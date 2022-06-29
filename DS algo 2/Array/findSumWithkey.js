// Find the sum of two number inside a array equal to value passed i.e k

function findSum(arr,k){
    var len =  arr.length;
    //Use First Pointer at arr[o]
    var i = 0;
    // use second pointer at last of array
    var j = len - 1
    // Loop to end of array 
    while(i<j){
        if(arr[i]+arr[j] < k){
            // If sum of first and last digit is 
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

findSum([10,15,3,7],13)
