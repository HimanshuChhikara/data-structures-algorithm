class team{
    constructor(name,number){
        this.name = name;
        this.number = number;
    }
    Introduce(){
        console.log(`hello I am ${this.name} and I wear ${this.number} jersey`);
    }
}


class Football extends team{
       constructor(name,number){
            super(name,number)
            
    }
}

const chelsea = new Football('Hazard','10')
console.log(chelsea);

chelsea.Introduce();