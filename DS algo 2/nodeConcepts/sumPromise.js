function sum(x,y){
    return new Promise(function(resolve,reject){
        try{
            resolve(x+y);
        }catch(err){
            reject(new Error(err))
        }
    })
}

console.log(sum(10,2));