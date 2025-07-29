const one = new Promise((resolve,reject)=> {
    console.log("One");
})


Promise.resolve().then(()=> {
    console.log("B")
})

