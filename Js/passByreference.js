function Passbyreference(obj) {
    obj = {
        a: 100,
        b: 200
    }

    console.log("OBJ .....",obj)

}

let obj = {
    a: 10,
    b: 20
}

console.log("Before calling function", obj);

Passbyreference(obj);
console.log("After calling function", obj);