function compress(str){

    var res = str.charAt(1) + ""
    for(let i=0; i<str.length-1; i++){
        if(str.charAt(i) !== str.charAt(i+1)){
            res += str.charAt(i+1)
        }
        else continue
    }

    return res
}

console.log(compress("bbbccaddeefff"))