function kidsWithCandies(candies,extraCandies){
    var mostcandies = candies[0];
    
    for(let i=0; i<candies.length; i++){
        if(candies[i] > mostcandies){
            mostcandies = candies[i]
        }
        
    }
    
    for(let j=0 ;j<candies.length ;j++){
        if(candies[j] + extraCandies >= mostcandies){
            candies[j] = true
        }
        else{
            candies[j] = false
        }
    }
    return candies
    
}

let res = kidsWithCandies([2,8,7],1)
console.log(res)