async function test() {
    console.log('1');
    
    const result = await new Promise((resolve) => {
        console.log('2');
        setTimeout(() => {
            console.log('3');
            resolve('resolved');
        }, 0);
    });
    
    console.log('4', result);
}

console.log('5');
test();
console.log('6');


// 5 1 4 2 6 3