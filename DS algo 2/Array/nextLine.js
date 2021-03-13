function nextLine(s){
    var arr = []
    var temp = "";
    for(var i =0;i<s.length;i++){
        if(s[i] === " "){
            arr.push(temp);
            temp = ""
        }else{
            temp = temp + s[i];

        }
    }
    arr.push(temp)
    

    for(var j=0;j<arr.length;j++){
        console.log(arr[j])
    }
}


nextLine("I am Himanshu");
