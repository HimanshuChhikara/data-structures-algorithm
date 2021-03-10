function nextLine(s){
    var temp = ""
    var arr = []
    var spl = s.split("");
    console.log(spl)
    
    for(var i =0;i<spl.length+1;i++){
       
        if(spl[i] != " "){
            temp += spl[i];
            console.log(temp)
            console.log(arr)
            // console.log(temp)
        }
        arr.push(spl[i])
        
        // console.log(temp)
        // console.log(arr)
        // console.log(temp)
    }
    // console.log(temp)
    // process(s[i])

}


var res = nextLine('Iam Himanshu');
console.log(res)
