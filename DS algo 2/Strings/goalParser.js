function goalParser(command){
    var res = "";
    for(var i=0;i<command.length ;i++){
        if(command[i] == 'G'){
            res +='G';
        }
        if(command[i] == '(' && command[i+1] == ')'){
            res +='o';
        }
        if(command[i] == '(' && command[i+1] == 'a' && command[i+2] == 'l' && command[i+3] == ')'){
            res +='al';
        }
    }
    return res;
}

var res = goalParser("G()()()()(al)")
console.log(res)