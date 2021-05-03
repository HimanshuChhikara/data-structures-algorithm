var arrayFunction = function(word1,word2){
    let s1 = ""

    for(let i of word1){
        s1 += i
    }

    let s2 = ""

    for(let j of word2){
        s2 += j
    }

    return (s1 === s2)
}

console.log(arrayFunction(["ab", "c"],["a", "bc"]))