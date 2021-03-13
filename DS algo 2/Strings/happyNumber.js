// function happyNumber(n){

//     arr = n.toString().split('');
//     console.log(arr)
//     var sum = arr[0] + arr[1]
//     if(sum == 1){
//         return true;
//     }
//     else{
//     for(var i=0;i<=arr.length;i++){
//         // console.log(`square of number 1 = ${Math.pow(arr[i],1)}`);

//         console.log(`Square of number = ${arr[i]*arr[i]}`);

//         var res = Math.pow(arr[i]) + Math.pow(arr[i+1]);
//         // console.log(Math.sqrt(arr[i]));
//     }
// }
// }

// var result = happyNumber(19);
// console.log(result)

function isHappy(num){
    var sum = 0 ;

    while(num > 0){
        sum += Math.pow(num % 10 , 2);
        console.log(`value of sum here is ${sum}`);
        num = Math.floor(num/10);
        console.log(`Value of num here is ${num}`);
    }
    console.log(num);
    if(num == 0){
        return true;
    }
    else
        return false;
    
}


var result = isHappy(12);
console.log(result);