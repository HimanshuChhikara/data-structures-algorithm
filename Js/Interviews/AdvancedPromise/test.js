console.log("1");

setTimeout(() => {
    console.log("2");
},1000)

Promise.resolve().then(() => console.log("3"));

async function test() {
    console.log("4");
    await Promise.resolve().then(()=> console.log("10"));
    console.log("5");
}

test();

console.log("6");