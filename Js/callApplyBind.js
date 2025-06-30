const wizard = {
    name : "MErlin",
    health : 100,
    heal(num1,num2){
        return this.health += num1 + num2;
    }
}

const archer = {
    name: "Robin",
    health: 50
}

console.log(wizard)
// wizard.heal.call(archer, 30, 30); // Call method
// wizard.heal.apply(archer,[20,30]); // Apply method
let result = wizard.heal.bind(archer,10,20);
console.log("BIND",result()); // Bind method
console.log(archer);