function findMaxConsecutiveOnes(nums){
    var len =  nums.length;

    let count = 0;
    let max  = 0;
    
    for(let i = 0; i<len ;i++){
        if(nums[i] === 1){
            count++
            if(count > max) max = count
        }
        
        else{
            count = 0
        }
    }
    return max
  
}

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));