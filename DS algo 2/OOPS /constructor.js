function createNewPerson(name){
    const obj = {};
    obj.name = name;
    obj.gretting = function(){
        console.log('Hi i am' + obj.name +'');
    };
    return obj;
}

const salva = createNewPerson('himanshu');
salva.name;
salva.gretting();