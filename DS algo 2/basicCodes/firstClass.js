
a();
function a(){
    console.log("a is called");
}

var b = function xyz(){
    console.log("b is called");
}
console.log(b);
b();

// First Class Function
var c = function(param){
    return function ztx(){

    }
}

console.log(c());


// Diffence in  Parameter and arrgument 
// function a(param1,param2) These are parameters
// a(1,2) these are arguments