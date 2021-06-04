function x(){
    for(var i=0;i<=5;i++){
        function close(ne){
            setTimeout(function(){
                console.log(ne)
            },ne*1000)
        }
        close(i)
    }
    
}

x()