var checkZeroOnes = function(s) {
    let count0 = 0;
    let count1 = 0;

    let finalcount0 = 0;
    let finalcount1 = 0;

    for(let i = 0;i<s.length;i++){
        if(s[i]== '1'){
            count1++;
            if(s[i+1]!=s[i]){
                finalcount1 = Math.max(count1,finalcount1);
                count1 = 0;
            }
        }
        if(s[i]=='0'){
           count0++;
           if(s[i+1]!= s[i]){
               finalcount0 = Math.max(count0,finalcount0);
               count0 = 0;
           }
        }
    }

    if(finalcount1>finalcount0) return true
    
    return false
};
console.log(checkZeroOnes('101'))