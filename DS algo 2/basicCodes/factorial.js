function fact(num) {
    if(num ==0){
        return 0;
    }
    else {
        return fact(num) * fact(num-1);
    }
}

console.log(fact(3))