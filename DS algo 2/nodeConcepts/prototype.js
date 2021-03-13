// function Particle(){
//     this.x = 10;
//     this.y = 15;
// }

// Particle.prototype.show = function(){
//     setUp(this.x, this.y)
//     console.log
// }

// function setUp(){
//     var p = new Particle();
// }

// console.log()

function Student(){
    this.name = 'Himanshu',
    this.gender = 'M'
}
var objS = new Student();
Student.prototype.sayHi = function(){
    console.log("Say Hi !!");
}

var objS1 = new Student();
var photo = Object.getPrototypeOf(objS1);

console.log(photo);
console.log(objS1);
console.log(objS)


// console.log(Student.prototype);
// console.log(objS);
// console.log(Student);
var example = Array.prototype
console.log(`Example ${example}`)