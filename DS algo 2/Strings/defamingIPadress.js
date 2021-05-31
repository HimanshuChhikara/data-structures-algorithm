var defangIpaddress = function(address){

    var res = ""

    for(let i=0 ;i<address.length; i++){
        if(address[i] == '.'){
            res += '[.]'
        }
        else {
            res += address[i]
        }
    }
    return res
}

console.log(defangIpaddress("1.1.1.1"))