const p = new Promise((resolve,reject) => {
    setTimeout(()=> {
        console.log("setTimeout");
        resolve("PROMISE DONE");
    },5000)
})   

const p2 = new Promise((resolve,reject) => {
    setTimeout(()=> {
        console.log("setTimeout");
        resolve("PROMISE DONE 2222");
    },5000)
}) 

async function getData() {
    console.log("HELLO WORLD")
   let value = await p;
   console.log("Value ",value);

   console.log("HELLOW AGAIN")
   let value2 = await p2;
   console.log("value2 ",value2);
   console.log("HIMANSHU 2");
}

getData()