function createFunctions() {
    var functions = [];

    for(var i=0;i<3;i++) {

        functions.push(function(i) {
            return i
        }.bind(null,i));
    }

    return functions;
}

let fun = createFunctions();
console.log(fun[0]());
console.log(fun[1]());
console.log(fun[2]());