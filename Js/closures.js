function a() {
    for(let i=0;i<3;i++) {
        function b(i) {
            setTimeout(() => {
                console.log(i)
            },i*1000)
        }
        b(10)
    }
}

a()