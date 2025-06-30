console.log('start');

setTimeout(() => console.log('timeout1'), 0);

Promise.resolve().then(() => {
    console.log('promise1');
    return Promise.resolve();
}).then(() => {
    console.log('promise2');
});

setTimeout(() => console.log('timeout2'), 0);

console.log('end');