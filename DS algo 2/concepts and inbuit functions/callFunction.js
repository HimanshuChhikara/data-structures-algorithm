let name = {
    firstName:"Himanshu",
    lastName:"Chhikara",
}

let printfullName = function(hometown){
    console.log(this.firstName + " " + this.lastName + " " +hometown )
}

let name2 = {
    firstName:"Aditya",
    lastName:"Vardhan"
}

printfullName.call(name2,"Delhi")