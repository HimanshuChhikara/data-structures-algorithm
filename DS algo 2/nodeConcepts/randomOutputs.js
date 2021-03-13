// let a =10;
// function global(){
//     console.log(a + "Inside global");
// }

// function outer(){
//     let a =4;
//     return global();
//     console.log(global());
//     console.log(a + "Inside outer");
// }

// outer()

// function grandfather(){
//     var name = "Karan singh"
//     console.log(name);
//     function father(){
//         var name = "Rakesh";
//         console.log(name)
//         function me(){
//             var name = "Himanshu";
//             console.log(name)
//         }
//     }
// }
// console.log(me.name);
// console.log(grandfather());

const name = "Lydia"
var age = 21
const city = "San Francisco"


function getPersonInfo() {
  const name = "Sarah"
  var age = 22
//   const city = "India"

  return `${name} is ${age} and lives in ${city}`
}
console.log(`${name} is ${age} and lives in ${city}`) 

console.log(getPersonInfo())