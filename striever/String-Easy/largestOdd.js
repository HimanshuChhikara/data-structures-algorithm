function largestOdd(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }
    
    return ''
    // let convert = parseInt(num);
    // if(convert % 2 !== 0) {
    //     return num;
    // }

    // let number = 0;
    // let largest = 0;
    // let arr = num.split("");
    // for(let i=arr.length-1;i>0;i--) {
    //     if(num[i] % 2 != 0) {
    //         number = num[i];
    //         largest = Math.max(largest,number);
    //     }
    //     else if(i === arr.length) {
    //         return "";
    //     }
    // }
    // if(largest === 0){
    //     return ""
    // } 
    // else{
    //     return largest.toString();
    // }
}

console.log(largestOdd("10133890"));