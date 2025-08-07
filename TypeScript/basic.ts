interface User {
    name: string,
    id: number
}

class UserAccount {
    name: string;
    id: number;
    isActive: boolean;

    constructor(name:string, id:number, isActive: boolean) {
        this.name = name
        this.id = id;
        this.isActive= isActive
    }
}

const user : User = new UserAccount("Himanshu",12,true);
console.log(user)

let tuple : [string,number];
 
tuple = ['Himanshu',20]

const book : Array<number> = [];

const mixed : (number|string)[] = ['fefve',"21"]
console.log(mixed)

