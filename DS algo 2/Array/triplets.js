function triplets(arr,sum){
    
    let result = []
    for(var i = 0;i<arr.length - 3;i++){
        let j = i + 1;
        let k = arr.length - 1
        
        while(j < k){
            var resultSum = arr[i]+ arr[j] +arr[k]
            if(resultSum== sum ){
                result.push([arr[i],arr[j],arr[k]])
                j++
                k--
            }
            else if(resultSum > sum){
                k--
            }
            else if(resultSum < sum){
                j++
            }
        }
    }
    return result
}

var res = triplets([1,2,3,4,5,6,7,8,9,15],18)
console.log(res)