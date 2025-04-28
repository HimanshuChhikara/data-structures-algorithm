// console.log(a); // ❓ What happens here?
// console.log(b); // ❓ What happens here?

// var a = 10;
// let b = 20;

// function test() {
//   console.log(a); // ❓ What happens here?
//   console.log(b); // ❓ What happens here?

//   var a = 30;
//   let b = 40;
// }

// test();


// function outer() {
//     var a = 5;
//     function inner() {
//       console.log(a);
//     }
//     inner();
//     a = 10;
//   }
  
//   outer();


// (function() {
//     var a = 5;
//     console.log(a);  // ❓
//     var a = 10;
//   })();

for (var i = 0; i < 3; i++) {
    function a(i) {
        setTimeout(()=> {
            console.log(i)
        },1000)
    }
    a(i)
    // function printI() {
    //   console.log(i);  // ❓
    // }
    // printI();
  }
  