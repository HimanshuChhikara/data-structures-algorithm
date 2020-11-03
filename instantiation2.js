class Car{
    constructor(engine,tyre){
        this.engine = engine;
        this.tyre = tyre;
    }
    Introduce(){
        console.log(`This is car that have ${this.engine} engine and ${this.tyre} tyres`);
    }
}

class Company extends Car{
    constructor(engine,tyre){
        super(engine,tyre)
    }
}

const company = new Company('Swift','MRF')
company.Introduce();