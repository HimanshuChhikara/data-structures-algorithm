function sellStock(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while(i < prices.length) {
        if(prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit); 
        }
        else{
            left = right;
        }
        right++;
    }
    return maxProfit;
}

console.log(sellStock([1,2,3,4,5,4,3,6]))



// dry run
// i 0
// min max currentPrice = price[i] - min   max (max,currentPrice) min (min,nums[i])

// min = 1, current = 0 max = 0
// min = 1 , current = 1, max =1
// min = 1, current = 2, max = 2
// min = 1, current = 3, max = 3
// min = 1, current = 4, max = 4
// min = 1, current = 2 max = 4
// min = 1, current = 5, max = 5

