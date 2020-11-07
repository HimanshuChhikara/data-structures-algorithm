function person(first,last,age,gender,interests){
    this.name = {
        first : first,
        last : last
    };

    this.age = age;
    this .gender = gender;

    this.interests = interests;

    this.bio = function(){
        console.log(`Hi my name is ${this.name.first} and i am ${this.age}`);
    }

    this.greetings = function(){
        console.log(`Hi I am ${this.name.first} ${this.name.last}`);
    }
}


var person1 = new person('Himanshu','Chhikara','26','male');
var bio = person1.bio();;

console.log(bio);
console.log(person1);

// var res = person.bio;
// console.log(res)

// console.log(person1);