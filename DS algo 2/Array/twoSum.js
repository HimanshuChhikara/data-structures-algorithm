var twoSum = function(arr, sum) {
    var res = [];
    
    for(var i=0;i<arr.length;i++){
        
        for(var j= i+1 ; j<arr.length;j++){
            

            if(arr[i] + arr[j] === sum){
                res.push(i);
                res.push(j);
            }
        }
    }
    
    return res;
 };

 console.log(twoSum( [3,2,4],6))