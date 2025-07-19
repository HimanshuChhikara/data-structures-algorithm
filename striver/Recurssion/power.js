function powerOf(x,n) {

    if(n == 0) return 1

    let powerNm1 = powerOf(x,n-1);
    return x * powerNm1;
}

console.log(powerOf(2,4));