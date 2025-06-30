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
wizard.heal.call(archer, 30, 30); // Call method
console.log(archer);