function Dog(name,breed) {
    this.name = name;
    this.breed = breed;
}

Dog.prototype.makeSound = function() {
    console.log(`${this.name} makes a sound`);
}

const dog = new Dog("Max","German Shefard");
console.log(dog.makeSound());
