const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 1000));
const promise3 = Promise.reject('error');

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        console.log('allSettled:', results);
    });

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('all success:', results);
    })
    .catch(error => {
        console.log('all error:', error);
    });