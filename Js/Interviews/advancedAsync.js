console.log("1");

let p1 = new Promise((resolve) => {
    console.log("2");

    setTimeout(() => {
        console.log("3");
        resolve("4");
    },1000);
})

let p2 = new Promise((resolve) => {
    console.log("5");

    setTimeout(() => {
        console.log("6");
        resolve("7");
    },500);
})

const p3 = Promise.all([p1, p2]);
console.log("p3",p3)


console.log("8")

// 1 2 5 8 6 3 7 4 