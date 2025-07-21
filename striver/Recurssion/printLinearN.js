function printLinearN(n) {

    if(n == 0) return

    printLinearN(n-1);
    console.log(n)

}

printLinearN(4)