function foo() {
    let b = 1;
    function inner() {
        return b;
    }
    return inner;
}

let iner_Fun = foo();

console.log(iner_Fun());
console.log(iner_Fun());
console.log(iner_Fun());
