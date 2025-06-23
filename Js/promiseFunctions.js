// const promise1 = new Promise((resolve,reject) => {
//     console.log("Promise 1");
//     resolve()
// })

// const promise2 = new Promise((resolve,reject)=>{
//     console.log("promise 2");
//     resolve()
// })

// const promise3 = new Promise((resolve,reject)=> {

//     reject()
// })

// Promise.all([promise1,promise2,promise3]).then((res) => {
//     console.log("HERE I")
    
// }).catch(error => {
//     console.log(error)
// })


const promises = [
    Promise.resolve('Success 1'),
    Promise.reject('Error 1'),
    Promise.resolve('Success 2'),
    Promise.reject('Error 2')
  ];
  
//   Promise.allSettled(promises)
//     .then(results => {
//       console.log(results);
//       // [
//       //   { status: 'fulfilled', value: 'Success 1' },
//       //   { status: 'rejected', reason: 'Error 1' },
//       //   { status: 'fulfilled', value: 'Success 2' },
//       //   { status: 'rejected', reason: 'Error 2' }
//       // ]
//     });

const promise1 = Promise.reject('Error 1');
const promise2 = new Promise(resolve => setTimeout(() => resolve('Success'), 1000));
const promise3 = Promise.reject('Error 3');

Promise.any([promise1, promise2, promise3])
  .then(result => {
    console.log(result); // 'Success'
  })
  .catch(error => {
    console.log('All promises rejected:', error);
  });

// Example where all fail
const allFail = [
  Promise.reject('Error 1'),
  Promise.reject('Error 2'),
  Promise.reject('Error 3')
];

Promise.any(allFail)
  .catch(error => {
    console.log(error); // AggregateError: All promises were rejected
  });