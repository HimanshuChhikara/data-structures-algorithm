"use strict";
const obj = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, ${this.name}`);
    },
    greetArrow: () => {
        console.log(`Hello, ${this.name}`);
    },
    delayedGreet: function() {
        setTimeout(function() {
            console.log(`Delayed: ${this.name}`);
        }, 100);
    },
    arrowDelayedGreet: function() {
        setTimeout(() => {
            console.log(`Arrow delayed: ${this.name}`);
        }, 100);
    }
};

let obj2 = {
    name : "Himanshu"
}

let fn = obj.arrowDelayedGreet.call(obj2);
// console.log("..",fn)

// obj.greet();
// obj.delayedGreet();
// obj.arrowDelayedGreet();