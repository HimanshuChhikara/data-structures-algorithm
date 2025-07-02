let promise1 = function() {
    return new Promise((resolve,reject) => {
        resolve("Done")
    })
}

let promise2 = function() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve("Done after 1 sec");
        },1000)
    })
}


//  polyfill for promise .all

function myPromiseAll(promises) {
    let result = [];
    let completed = 0;
    return new Promise((resolve,reject) => {
        promises.forEach((p) => {
            Promise.resolve(p).then(value => {
                result.push(value);
                completed++
                if(completed === promises.length) {
                    resolve(result);
                }
            }).catch(reject)
        })
    })
}

// function myPromiseAll(promises) {
//     return new Promise((resolve, reject) => {
//       const results = [];
//       let completed = 0;
  
//       promises.forEach((p, i) => {
//         Promise.resolve(p).then(value => {
//           results[i] = value;
//           completed++;
//           if (completed === promises.length) {
//             resolve(results);
//           }
//         }).catch(reject);
//       });
//     });
//   }
  

myPromiseAll([promise1(),promise2()]).then((result)=> {
    console.log(result)
})


// console.log(promise1())
