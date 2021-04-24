var addStrings = function(num1, num2) {    
    var ptr1 = num1.length - 1;
    var ptr2 = num2.length - 1;
    
    var carry = 0
    var res = ''
    
    while(ptr2 >=0 || ptr1 >= 0){
        
        let x1 = ptr1 < 0 ? 0 : parseInt(num1.charAt(ptr1))
        console.log("value of X1  "+x1)
        let x2 = ptr2 < 0 ? 0 : parseInt(num2.charAt(ptr2))
        console.log("Value of X2  " + x2)
        
        var sum = (x1 + x2 + carry) 
        var x3 = sum % 10
        console.log("valuie of x3 " + x3)
        
        carry = Math.floor(sum/ 10)
    
        res = x3 + res
        ptr1--
        ptr2--
    }
    if(carry == 1){
        res = carry + res  
    }
     return res
    
};

console.log(addStrings('11','123'))