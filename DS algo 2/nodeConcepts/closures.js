var arr = [22,11,33,21,31];
for(var i=0;i<arr.length;i++){
    function close(i){
        setTimeout(function(){
            console.log("Index "+""+ i + "element " + arr[i]);
        },3000);    
    }
    close(i);
}
