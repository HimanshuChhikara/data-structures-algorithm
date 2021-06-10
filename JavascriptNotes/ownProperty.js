class Person {
    name = "Himanshu";

    printPerson(){
        console.log(this.name)
    }

}

var brandon = new Person();

var ref = brandon.printPerson;

console.log(ref);