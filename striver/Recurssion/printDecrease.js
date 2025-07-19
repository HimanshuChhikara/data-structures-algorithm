function printDecrease(num) {
    if(num == 0) return
  
    console.log(num);
    printDecrease(num - 1);
}

printDecrease(5)