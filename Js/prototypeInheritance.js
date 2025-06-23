// function person(name) {
//     this.name = name;
// }

// console.log(person.prototype)

// const person1 = new person('HImamshu')
// console.log(person1)


function Animal(species,age) {
    this.species = species;
    this.age = age;
}

Animal.prototype.makeSound = function () {
    return "Make generic sound";
}

function Dog(name,breed) {
    Animal.call(this,"Canine","12")
    this.name = name;
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function() {
    return "woof"
}

const dog = new Dog("Max","German Shefard");
console.log(dog.age)
console.log("DOgg",dog)