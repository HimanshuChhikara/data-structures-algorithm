const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Promise 1")
    },10000)
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Promise 2")
    },6000)
})

const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise 3")
    },3000)
})

Promise.race([promise1,promise2,promise3]).then((res) => {
    console.log(res)
})