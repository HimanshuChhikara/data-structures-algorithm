function once(fn,context){
    var result;

    return function(){
        if(fn){
            result = 10;
            console.log(result)
        }
        return result
    };
}

once(12)