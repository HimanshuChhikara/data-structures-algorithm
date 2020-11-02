class Player {
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    Introduce(){
        console.log(`Hi I am ${this.name} and of type ${this.type}`)
    }
}

class Wizard extends Player{
    constructor(name,type){
    super(name, type)
    }
    // play(){
    //     console.log(`weee I'am a ${this.type}`);
    // }
}
// class Player2 {
//     constructor(name1,type2){
//         this.name1 = name1;
//         this.type2 = type2;
//     }
//     Introduce(){
//         console.log(`Hi i am ${this.name1}`);
//     }
// }  

// class Wixard extends Player2{
//     constructor(name1,type2){
//         super(name1,type2)
//     } 
// }


const Wizard1 = new Wizard('Himanshu','Healer');
// const Wizard2 = new Wizard('Aman','Attacker')
// const Wixard = new Wixard('Him','health');

Wizard1.Introduce()
// Wizard2.Introduce()