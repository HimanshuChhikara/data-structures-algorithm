function intersect(num1,num2){
    let res = []
    let sorted1 = num1.sort()
    let sorted2 = num2.sort()
    let i = 0
    let j = 0
    let len = sorted2.length
    while(j<len){
        if(sorted1[i] !== sorted2[j]){
            j++
        }
        else{
            res.push(sorted1[i])
            i++
            j = 0
        }
        i++
    }
    return res
}

console.log(intersect([4,9,5],[9,4,9,8,4]))