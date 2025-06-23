let car = {
    engine : "1500",
    color: "Black",
    name: "Swift"
}

console.log(car);

let man = car;
// man.name;
console.log(man.name)

// using new keyword 

let newCar = new Object();
newCar.name = "Nexon";
newCar.color = "Blue"

console.log(newCar)