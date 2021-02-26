const one = function(){
    setTimeout(function(){
        console.log("TimeOut")
    },4000) 
    // Promise.resolve("Promise");
};

async function myFunction(){
    console.log("InSide Function");
    const res = await one()
    // console.log(res);
}

console.log("Before Function");

console.log("After Function")
myFunction();