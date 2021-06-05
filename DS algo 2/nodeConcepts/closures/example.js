function outest(c){
    var c = 20
    // var innsrs = "Heehehe";
    function outer(b){
        var a = 10;
        function inner(){
            console.log(a,b,c)
        }
        return inner
    }
    return outer
    
}

 
var close = (outest())("Hello world");
close()

