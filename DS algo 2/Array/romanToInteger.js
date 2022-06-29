var romanInt = function(s){
    const sym = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let result = "";
    for(var key in sym){
        // console.log("Key"+key);
        // console.log("Number"+sym[key])
        while(s >=sym[key]){
            console.log("Sym key" + sym[key])
            console.log(key);
            result += key;
            console.log("result"+result);
            s -= sym[key]
            console.log("S is "+s)
        }
        
    }
    return result
};

console.log(romanInt(4));