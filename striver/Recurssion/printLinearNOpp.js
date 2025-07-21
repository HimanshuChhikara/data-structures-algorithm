function printLinearOpposite(n) {
    if(n === 0) return
    console.log(n)
    printLinearOpposite(n-1)
}

printLinearOpposite(4);