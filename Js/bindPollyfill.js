let name = {
    firstName : "Himanshu",
    lastName : "Chhikara"
};


function getFullName(state) {
    return `${this.firstName} ${this.lastName} i am from ${state}`;
}

let getName = getFullName.bind(obj);
// console.log(getName("Haryana"));


Function.prototype.myBind = function(...args) {
    let obj = this;
    console.log("This.....",args[0])
    return function() {
        obj.call(args[0]);
    }
}


let getName2 = getFullName.myBind(name);
console.log(getName2());