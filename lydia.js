var name = "John Doe"
const person = { name :"Lydia Hallie"}

function getName(){
    return this.name
}

person.getName = getName;
console.log(person.getName());