var name = "Himanshu";

const person = {
    name : "Lydia",
    age : 12,
}

function getNme(){
    return this.name
}

person.getNme = getNme;

console.log(getNme());