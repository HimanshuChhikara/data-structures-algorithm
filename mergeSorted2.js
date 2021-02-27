function mergeSorted(num1,num2){
    var i,j = 0;
    var len1 = num1.length;
    var len2 = num2.length;
    var final = [];

    while(i<len1 && j<len2){
        if(num1[i]<num2[j]){
            final.push(num1[i]);
            i++;
        }
        else{
            final.push(num2[j]);
            j++;
        }
    }
    while(i<len1){
        final.push(num1[i]);
    }
    while(j<len2){
        final.push(num2[j]);
    }
return final;
}
console.log(mergeSorted([1,8,7],[6,9,11]))
