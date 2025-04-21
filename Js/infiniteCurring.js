function add(a) {
    return function (b) {
        console.log("A",a)
        console.log("B",b)
        if(b ) return add(a+b);
        return a
    }
}



console.log(add(3)(4)(5)(6)(7)())