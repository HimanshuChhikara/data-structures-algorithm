var decimal  = (num,div)=>{
    var result = 0 
    var p = 1

    while(num > 0){
        var digit = num % div
        num = num / div

        result += digit * p
        p = p * 10
    }
    return result
}

console.log(decimal(634,8))
