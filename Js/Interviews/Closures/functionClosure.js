function createFunctions() {
    var funcs = [];
    for (var i = 0; i < 3; i++) {
        funcs[i] = function() {
            return i;
        };
    }
    return funcs;
}

const functions = createFunctions();
console.log(functions[0]())