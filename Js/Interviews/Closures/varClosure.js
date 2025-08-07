function print() {
   
    for(var i=0;i<5;i++) {
        function inner(i) {
            setTimeout(()=> {   
                console.log(i);
            },1000 * (5-i))
        }
        inner(i)
    }
}

print()