var name = "Himanshu";
let age = 10;
function a(){
    var name = "Amit";
    let age = 19;    
}

function b(){
    // console.log(a());
    var result = a();
    console.log(result);
    console.log(name);
    console.log(age)
}

b();