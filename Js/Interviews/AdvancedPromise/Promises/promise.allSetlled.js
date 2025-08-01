const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise 1")
    },1000)
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise 2")
    },2000)
})

const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Promise 3")
    },3000)
})

Promise.allSettled([promise1,promise2,promise3]).then((res) => {
    console.log(res)
})
