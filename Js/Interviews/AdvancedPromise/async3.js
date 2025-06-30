console.log('A');

Promise.resolve()
    .then(() => {
        console.log('B');
        throw new Error('error');
    })
    .then(() => {
        console.log('C');
    })
    .catch(() => {
        console.log('D');
        return 'handled';
    }).finally(() => {
        console.log('Fially');
        return 'F';
    })

console.log('F');

// A F B D handled