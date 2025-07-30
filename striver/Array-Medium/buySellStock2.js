function buySellStock(prices) {
    let profit = 0
    for(let i=0;i<prices.length;i++) {
        if(prices[i] < prices[i+1]) {
            let currentProfit = prices[i+1] - prices[i]
            profit += currentProfit
        }
    }
    return profit
}

console.log(buySellStock([7,1,5,3,6,4]));