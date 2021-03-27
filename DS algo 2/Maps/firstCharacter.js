var firstUniqChar = function(s) {
    var empty = {}

    for(let i =0;i<s.length;i++){
        const char = s[i]

        empty[char] = empty[char]+1 || 1
        
    }
    for(let i = 0;i<s.length;i++){
            const char = s[i]
            if(empty[char] === 1){
                return i
            }
    }
    return -1
};

console.log(firstUniqChar('Himanshu'))