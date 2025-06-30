let i = 0;

for (i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log('setTimeout:', i);
    }, 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log('setTimeout let:', j);
    }, 100);
}

console.log('final i:', i);