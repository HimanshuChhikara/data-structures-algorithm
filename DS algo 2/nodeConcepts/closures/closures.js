function res(){
    var name = "himanshu";
    function x (){
        var a = 10;
    
        function b(){
            console.log(a,name);
        }
        b()    
    }   
    x()     

}

res()