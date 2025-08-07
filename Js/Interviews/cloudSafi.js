function capitalizeWord(str) {
    let res = ""
    for(let i=0;i<str.length;i++) {
        if(str[i-1] === ' ' || i == 0) {
            res += str[i].toUpperCase()
        }else {
            res += str[i]
        }
    }

    return res
}

console.log(capitalizeWord("hi i am himanshu who are you"))