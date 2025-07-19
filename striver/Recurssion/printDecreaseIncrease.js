function printIncreaseDecrease(num) {
    if(num == 0) return
    console.log(num);
    printIncreaseDecrease(num - 1);
    console.log(num)

}

printIncreaseDecrease(5);