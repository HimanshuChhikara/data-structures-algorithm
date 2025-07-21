function fibbonachi(n) {

    if(n <= 1) return n

    return fibbonachi(n-1) + fibbonachi(n-2);
}

console.log(fibbonachi(10));


// 0 + 1 + 2 + 3 + 5