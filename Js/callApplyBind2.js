let name = {
    firstName: "Himanshu",
    lastName: "Chhikara"
}

let printFullName = function(hometown,state) {
    console.log(this.firstName,this.lastName + " Lives in " + hometown + " which is in " + state);
}

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

printFullName.call(name2,"Mumbai","Maha")
printFullName.apply(name2,["Mumbai","Maharashtra"])
let res = printFullName.bind(name2,"Mumbai","Maharashtra")
res()
