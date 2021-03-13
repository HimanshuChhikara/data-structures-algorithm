// var promise = new Promise(function(resolve,reject){
//     try {
//         var data = "Himanshu";
//         resolve(data)      
//     } catch (err) {
//         reject(new Error(err));
//     }
// })

// console.log(promise);

function getDate(){
    return new Promise(function(resolve,reject){
        try {
            var date = new Date()
            // return date;
            resolve(date);
        } catch (err) {
            reject(new Error(err))
        }
    })
}

console.log(getDate());