// check if the given number is power of two
// i.e 4 = 2*2 || 8 = 2*2*2 \\ 16 = 2*2*2*2

var isPowerOfTwo = function(n) {
    let i = 2;
    // loop to end of number say 16
    while(i<n){
        console.log("before "+i)
        i *= 2; // multiply each number by 2 so that last number get multiple of two
        // console.log("After " + i)
    }

    return i === n
};

console.log(isPowerOfTwo(64))