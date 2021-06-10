function intersection(num1,num2){
    let res = []
    num1.sort((a,b) => a-b);
    num2.sort((a,b) => a-b);
    
    let i = 0;
    let j = 0;

    while(i<num1.length && j<num2.length){
        if(num1[i] == num2[j]){
            res.push(num1[i])
            i++;
            j++
        }
        else if(num1[i] < num2[j]){
            i++
        }
        else j++
    }
    console.log(res)
    
  
}

console.log(intersection([4,9,5],[9,4,9,8,4]))