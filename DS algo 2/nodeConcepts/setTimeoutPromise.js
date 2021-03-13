// function change(){
//     return new Promise(function(resolve,reject){
//         setTimeout(resolve,2000);
//     }).then(function(){
//         console.log("Inside SetTimeout")
//     })
// };

// console.log(change());

const resolveInOnesecond = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(1),1000)
    })
}

const resolveInTwoSecond = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(2),2000)
    })
}

const resolveInThreeSecond = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(3),3000)
    })
}

(async function(){
    const asyncFunctions = [
        resolveInOnesecond(),
        resolveInTwoSecond(),
        resolveInThreeSecond(),
    ];
    const result = await Promise.all(asyncFunctions);
    console.log(result);
})();