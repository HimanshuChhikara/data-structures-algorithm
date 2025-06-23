console.log("a");
setTimeout(()=>console.log("set timeout"),1000);
Promise.resolve().then(() => console.log("Promise"));
console.log("b")