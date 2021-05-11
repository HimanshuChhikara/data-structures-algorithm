function compressAlphabet2(str){
    var s = "";
    var count = 1

    for(let i=0; i<str.length; i++){
        var current = str.charAt(i)
        var pervious = str.charAt(i-1)

        if(current == pervious){
            count++
        }
        else{
            if(count > 1){
                s += count
                count = 1
            }
            s += current
        }
    }
    if(count > 1){
        s += count
        count = 1
    }

    return s
}

console.log(compressAlphabet2("bbbccaddeefff"))