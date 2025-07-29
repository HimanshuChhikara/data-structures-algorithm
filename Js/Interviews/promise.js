const tasks = [
    () => Promise.resolve('A'),
    () => new Promise(res => setTimeout(() => res('B'), 1000)),
    () => Promise.resolve('C')
];


processTasksInOrder(tasks).then((data) => console.log(data));;


async function processTasksInOrder(tasks) {
    let res = []
    for(let task of tasks) {
        // console.log(typeof task)
        // res.push(task())
        let data = await task();
        res.push(data);
        // console.log("Console.log",task().then((data) => console.log(data)))
    }
    // console.log(res);
    return res
    // console.log(res)
}


// const a = () => new Promise(res => setTimeout(() => res('B'), 1000))

// async function checkA() {
//     let res = await a();
//     console.log("RES ....",res)
// }

// a().then(data => console.log("DATA ......",data))