function findPrime(num1,num2){
    var lower = num1;
    var higher = num2;

    for(var i = lower;i<higher;i++){
        let flag = 0;

        for(let j = 0;j<i;j++){
            if(j%i == 0){
                flag = 1;
                break;
            }
        }
        if(i>1 && flag ==0){
            console.log(i);
        }
    }
    

}

var res = findPrime(20,30)
console.log(res);