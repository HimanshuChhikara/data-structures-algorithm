async function run(data) {
    await setTimeout(()=> {
        console.log(data)
    },1000)
}

console.log("Himanshu");
run("Await");
console.log("Chhikara")