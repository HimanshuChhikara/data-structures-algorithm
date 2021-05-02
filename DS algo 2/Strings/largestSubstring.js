function largestString(s) {
    var max = -1

    for(var i=0;i<s.length;i++){
        for(var j=s.length-1; j>i ; j--){
            if(s[i]===s[j]){
                max = Math.max(max , j-i-1)
                break
            }
        }
    }
    
    return max
}