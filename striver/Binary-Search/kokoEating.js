function minEatingSpeed(piles,k) {

    let low = 1;
    let high = Math.max(...piles);
    let res = high;

    while(low <= high) {
        let mid = low + Math.floor((high-low)/2);
        let totalHours = 0;

        for(let pile of piles) {
            totalHours += Math.ceil(pile / mid);
        }

        // Total hours are the total time taken to eat all the piles at speed mid that is pile / mid;
        if(totalHours <= k) {
            res = mid;
            high = mid -1;
        }
        else {
            low = mid + 1
        }   
    }
    return res
}


console.log(minEatingSpeed([3,6,7,11],9)); // 4