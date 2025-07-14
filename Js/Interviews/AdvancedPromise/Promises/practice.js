let p1 = new Promise((resolve,reject) => {
    console.log("Promise 1");
    setTimeout(()=> {
        resolve("Done 1");
    },15000)
})


const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Done 2")
    },10000)
});

const getAllPromise = async() => {
    console.log("HERE IN GET ALL ")
    await p2.then((data) => {
        console.log("DATA 22 ...",data)
    })

    console.log("WAITINGGGG")
    await p1.then((data) => {
        console.log("DATA ...",data);
    })
    console.log("COMPLETED")

}

getAllPromise();

// console.log("FINAL")