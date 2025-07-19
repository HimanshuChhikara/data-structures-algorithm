function printNumber(num) {
    if(num == 4) return
    
    console.log(num);
    printNumber(num + 1)
}

printNumber(0);