console.log("Start");

setTimeout(function() {
    console.log("TimeOut");
},0)

Promise.resolve().then(function () {
    console.log("Promise");
});

console.log("End");