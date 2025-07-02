function counter() {
    let count = 0;
    function increment() {
        count++;
        return count;
    }

    return increment();

}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
