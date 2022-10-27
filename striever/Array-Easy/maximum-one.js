function maximumOne(arr) {
    let count = 0;
    let max = 0;

    for(let i=0;i<arr.length;i++) {
        for(let j=0;i<arr[i].length;i++) {
            if(arr[i][j] === 1){
                count++
            }
        }
        max =  Math.max(count,max);
    }
    return max;
}

console.log(maximumOne([[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]]))