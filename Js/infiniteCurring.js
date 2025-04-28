function add(a) {
    return function (b) {
        debugger
        if(b) return add(a+b);
        return a
    }
}

function multiply(a) {
    return function (b) {
        if(b) return multiply(a * b);
        return a;
    }
}

console.log(add(3)(4)(5)(6)(7)())