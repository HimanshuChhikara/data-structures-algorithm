function job() {
    return new Promise((resolve,reject)=> {
        resolve("DONE")
    });
}

function check() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve("Checked");
        },5000)
    })
}


let promise = job();
promise.then(()=> {
    console.log("Try 1")
}).then(async ()=> {
    let data = await check();
    console.log("Try 2",data);
}).catch(()=> {
    console.log("Error")
}).then(()=> {
    console.log("Try 3");
}).finally(() => {
    return console.log("FINALLy")
})

