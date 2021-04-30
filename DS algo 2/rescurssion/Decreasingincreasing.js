function increasingDecreasing(n){
    if(n == 0){
            return

    }
    console.log(n);
    increasingDecreasing(n-1);
    console.log(n);
}

console.log(increasingDecreasing(4));