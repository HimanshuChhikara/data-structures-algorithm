function intersection(num1,num2){
    let res = []
    for(let i=0 ;i<num1.length ;i++){
        for(let j=0 ;j<num2.length ;j++){
            if(num1[i] === num2[j]){
              res.push(num1[i])  
            }
        }
    }
    console.log(res)
    console.log([...new Set(res)]) 
}

console.log(intersection([1,2,2,1],[2,2]))