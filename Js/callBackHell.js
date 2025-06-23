function firstAsyncFunction(callback) {
    setTimeout(()=> {
        console.log("First Task Completed");
        callback()
    },1000);
}

function secondAsyncFunction(callback) {
    setTimeout(()=> {
        console.log("Second Task Completed");
        callback()
    },5000);
}

function thirdAsyncFunction(callback) {
    setTimeout(()=> {
        console.log("Third Task Completed");
        callback()
    },8000);
}


firstAsyncFunction(()=> {
    secondAsyncFunction(() => {
        thirdAsyncFunction(()=> {
            console.log("Finally This is done");
        })
    })
})