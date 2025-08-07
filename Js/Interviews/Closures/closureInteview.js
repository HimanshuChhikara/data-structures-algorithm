function counter() {
    for(var i=0;i<3;i++) {
        function increment() {
            // console.log(i)
            i++
            return i;
        }
    }

    return increment();

}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
