function checkVowels(s){
    let arr = ['a','e','i','o','u','A','E','I','O','U'];
    
    var a = s.slice(0,s.length/2);
    var b = s.slice(s.length/2,)

    let index = 0;
    let count = 0;

    while(index < a.length){
        if(arr.includes(a[index])){
            count++
        }
        if(arr.includes(b[index])){
            count--
        }
        index++
    }
    return count == 0

    // var isVowel = false
    // for(let i = 0; i<s.length; i++){
    //     for(let j =0; j<arr.length ;j++){
    //         if(s.charAt(i) === arr[j]){
    //             isVowel = true
    //         }
    //     }
    // }
    // return isVowel
}

console.log(checkVowels('bk'));