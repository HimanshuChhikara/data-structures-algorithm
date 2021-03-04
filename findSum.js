function findSum(arr,sum){
    var i = 0;
    var j = arr.length - 1;

    while(i<j){
        if(arr[i]+arr[j] < sum){
            i++;
            console.log(arr[i])
            console.log(arr[j])
        }else if(arr[i]+arr[j]>sum){
            j++;
            console.log(arr[i])
        }
        else if(arr[i]+arr[j] == sum){
            return true
        }
    }
    return false
}

var res = findSum([1,2,3,8,7,6],12);
console.log(res)

