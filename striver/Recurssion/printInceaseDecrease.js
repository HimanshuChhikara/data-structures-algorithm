function printInceaseDecrease(num) {
    if(num == 6) return;

    console.log(num);
    printInceaseDecrease(num + 1);
    console.log(num);
}

printInceaseDecrease(1)