console.log("a");
setTimeout(()=>console.log("set timeout"),0);
Promise.resolve(() => console.log("Promise").then((res)=> res()));
console.log("b")