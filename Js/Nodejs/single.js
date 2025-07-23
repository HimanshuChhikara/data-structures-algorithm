const a = 10;

setTimeout(()=> {
    console.log("SET TIMEOUT....");
},1000)

function test() {
    console.log(a)
}

test();

console.log("File End")