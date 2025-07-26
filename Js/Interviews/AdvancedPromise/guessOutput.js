// Q: Predict the output order
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
setTimeout(() => console.log('4'), 0);
Promise.resolve().then(() => {
    console.log('5');
    setTimeout(() => console.log('6'), 0);
});
console.log('7');


// 1 7 3 5 6 2 4