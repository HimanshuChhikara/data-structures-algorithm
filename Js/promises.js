function ayncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First Promise");
            resolve()
        },1000);
    })
}

async function secondFunction() {
    await console.log("SECOND FUNCTION")
}

// ayncFunction().then((res) => {
//     console.log(res);
// })

async function callFunction() {
    const res = await ayncFunction();
    let res2 = await secondFunction();
    console.log(res);
}

callFunction()