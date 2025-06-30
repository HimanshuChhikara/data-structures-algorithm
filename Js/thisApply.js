const wizard = {
    name: 'Himanshu',
    health: 50,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin',
    health: 30
}

const destroyer = {
    name : "Thanos",
    health : 100,
    destroy() {
        return this.health = 0;
    }
}

const newWizard = wizard.heal(10, 20);
wizard.heal.apply(archer, [10, 20]); // Apply method  will be used to call the function with an array of arguments
destroyer.destroy.apply(wizard,[])
// console.log("New Wizard ,.....",wizard,archer)

let res = destroyer.destroy.bind(wizard)(); // Bind method will return a new function with the context set to archer
console.log(res);