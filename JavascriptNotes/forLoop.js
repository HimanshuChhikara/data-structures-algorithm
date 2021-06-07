function forLoop() {
    var obj = {
        name : 'himanshu',
        age : 12,
        class : 'b.tech',
        college : 'PDM'
    }
    let res = ""; 
    for(var i in obj){
        if(obj[i] == 12){
            res += obj[i]
        }
    }
    console.log(res)
}

forLoop();