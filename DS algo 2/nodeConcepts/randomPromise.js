function randomNumber1(){
    var p= Promise.resolve();
    var empty = [];
    for(let i =1; i<=10 ; i++){
        p.then(_ => new Promise(resolve =>{
            empty.push(i);
            var rand = Math.round(Math.random() * (3000-1000) + 1000)

                setTimeout(()=>{
                    // empty.push(i);
                    console.log(empty)
                    return empty
                    resolve(i)},rand);   

        }))


}
}

(async function(){
    const promiseArray = [
        randomNumber1(),
    ];
    const result = await Promise.all(promiseArray);
    console.log(result);

})();

// async function Print(){
//     var empty = [];
//     for(var i=0;i<3;++i){
//         await randomNumber();
//         empty.push(i);
//         console.log(i);   
//     }
//     console.log(empty);
//     console.log("Finished")
// }

// randomNumber();
// Print();
// console.log(randomNumber());