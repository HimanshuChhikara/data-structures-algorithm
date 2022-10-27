function sellStock(prices) {
    // let buy = prices[0];
    // let sell = prices[1];
    // let maxProfit = 0;
    // let currentProfit = 0;

    // for(let i=0;i<prices.length;i++) {
    //     if(prices[i] < buy) {
    //         buy = prices[i];
    //     }
    //     else if(prices[i] > buy && i>1) {
    //         sell = prices[i];
    //     }
    //     currentProfit = sell - buy;
    //     maxProfit = Math.max(currentProfit, maxProfit);
    // }

    // return maxProfit;
    let max = 0;
    let n = prices.length;
    let min = Number.MAX_VALUE;
    let currentPrice;
    
    for(let i=0;i<n;i++) {
        min = Math.min(min,prices[i]);
        currentPrice = prices[i] - min;
        max = Math.max(max,currentPrice);
    }
    return max;
}

console.log(sellStock([7,6,4,3,1]))