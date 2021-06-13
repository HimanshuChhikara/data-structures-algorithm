function countPrimes(num){
    let res = [2];

    if(num == 0) return 0;
    if(num == 1) return 0;
    let arr = [];

    for(let k=3;k<num;k++){
        arr.push(k);
    }
    console.log(arr);

    let j = 0
    for(let i=2 ;i<num.length; i++){
       if(arr[j] % i == 0){
           res.push(arr[j])
       }
       else{
           j++
       }
       j++
    }
    return res;
}

var response = countPrimes(10);
console.log(response)