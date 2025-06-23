let x = 0;

for(let i=0;i<5;i++) {
    setTimeout(()=> {
        x++
        console.log(x++)
    },1000)
}