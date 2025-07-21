function sumN(n) {

    if(n == 1) return 1;

    return n + sumN(n-1);
}

console.log(sumN(5));