// var exap = new Promise(function(resolve,reject){
//     try{
//         var a =10
//         console.log("Resolved");
//         console.log(a);
//         resolve()
//     }
//     catch(err){
//         reject(new err(err));
//     }
// })


// function getImage(){
//     return new Promise(function(resolve,reject){
//         try{
//             const date = new Date();
//             console.log(date);
//             resolve(date);
//         }
//         catch(err){
//             reject(new err(err))
//         }
//     })
// }

// getImage();

console.log("Start");

setTimeout(function(){
    console.log("TimeOut");
},3000)

Promise.resolve("Promise!!")
    .then(res => console.log(res));

console.log("END");