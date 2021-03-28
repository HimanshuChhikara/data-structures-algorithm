for(var i =0;i!=5;i++){
    // console.log("value of i =="+i);
    setTimeout(function(index){
        // console.log(i)
        return function(){
        console.log(index)
        }
    }(i),1000)
}

