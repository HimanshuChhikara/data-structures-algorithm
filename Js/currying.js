// Basic 
// const add = (a) => (b) => (c) => a+b+c;

// console.log(add(1)(2)(3))


// Generic function


function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this,args);
        }
        else {
            return function (...nextArgs) {
                return curried.apply(this,[...args,...nextArgs]);
            }
        }
    }
}

const multiply = (a,b,c) => a * b * c;
const curriedMultiply = curry(multiply);

console.log(curriedMultiply(9)(2)(3))

