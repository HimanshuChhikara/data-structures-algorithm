function sum(a) {
    return function(b){
        return function(c) {
            return a + b + c
        }
    }
}

console.log(sum(2)(3)(1))