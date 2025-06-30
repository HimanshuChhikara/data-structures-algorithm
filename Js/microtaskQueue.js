setTimeout(()=> {
    console.log("setTimeout");
},0);

Promise.resolve().then(() => {
    console.log("Promise");
});


Promise.resolve().then(() => {
    console.log("Promise 2");
}); 

queueMicrotask(() => {
    console.log("queueMicrotask");
});
console.log("SYNC")