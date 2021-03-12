function nextLine(s){
    var arr = []
    var temp = "";
    for(var i =0;i<s.length;i++){
        if(s[i] === " "){
            arr.push(temp);
            console.log("value of temp =="+temp)
            temp = ""
            // console.log("arr is "+arr)
            // console.log(temp)
        }else{
            temp = temp + s[i];

        }
    }
    arr.push(temp)
    console.log(arr)
}


var res = nextLine("I am Himanshu");
console.log(res)
