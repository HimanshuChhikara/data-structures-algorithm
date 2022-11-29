function printNumber() {
    for(var i=0;i<5;i++) { 
        function x(i) {
            setTimeout(() => {
                console.log(i);
            },i * 2000)
        }
        x(i)
    }
}
printNumber();