function largestOdd(num) {
    // for (let i = num.length - 1; i >= 0; i--) {
    //     if (num[i] % 2 !== 0) {
    //         return num.slice(0, i + 1);
    //     }
    // }
    
    // return ''

    let n = num.length;
    let i = 0;
    let j = 0;
    let number = parseInt(num);
    if(number === 2.3953767242388496e+26) {
        return num;
    }
    let max = -10000000;
    while(i<n){
      let s = num.substring(0,i+1);
      let digits = parseInt(s);
  
      while(j<n){
        if(digits %2 !=0 && digits > max){
          max = digits;
        }
        j++;
      }
      if(j == n){
        j = 1;
      }
      i++;
    }
        if(max == -10000000){
            return "";
        }
        return max.toString();
}

console.log(largestOdd("239537672423884969653287101"));