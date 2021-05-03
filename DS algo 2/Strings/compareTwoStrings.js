var arrayStringsAreEqual = function(word1, word2) {
    let str1 = '';
    let str2 = '';

    for(let letter in word1){
        str1 += word1[letter]
    }
    // console.log(str1);
    for(let letter2 in word2){
        str2 += word2[letter2];
    }
    if(str1.length != str1.length){
        return false
    }

    let i = 0
    let j = 0
    let count = 0 
    while(i <= j){
   
        if(str1.charAt(i) != str2.charAt(j)){
            count = 0
            i++
            j++
        }
        else{
            count++
            i++
            j++
        }
        
    }
    console.log("Value of Count  =  " + count)

    if(count == 0){
        return false
    }
    else return true

   
};

console.log(arrayStringsAreEqual(['ab','bc'],['ssaw','adsf']))