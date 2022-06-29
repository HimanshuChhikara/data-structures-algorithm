function counterArray(n){
    const empty = []
    var current = 1;
    var counter = n-1

    while(counter){
        empty.unshift(current)
        current++
        counter--
    }
    return empty

}

console.log(counterArray(5));
