console.log("Start")

function himanshu() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            console.log("Promise 1")
            resolve("DATA 1");
        },1000)
    })
}

function himanshu2() {
    return new Promise((resolve,reject) => {
        console.log("Promise 2");
        // resolve()
    })
}


async function result(){
    console.log("INSIDE RESULT");
    let data1 = await himanshu();
    const data2 = await himanshu2();
    console.log("DATA 11",data1);
    console.log("DATA 22",data2)
}

result()
console.log("End");