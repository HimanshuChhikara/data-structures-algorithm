function Animal(name) {
    const self = {}

    self.name = name;
    self.eat = function() {
        console.log(`${self.name} is eating`);
    };

    self.sleep = function() {
        console.log(`${self.name} is sleeping`);
    };

    return self;
}

function dog(name,breed) {
    const self = Animal(name);

    self.breed = breed;
    self.bark = function() {
        console.log(`${self.name} is barking`);
    };

    return self;
}

const myDog = dog('Buddy', 'Golden Retriever');
console.log("MY DOG .....",myDog.eat());