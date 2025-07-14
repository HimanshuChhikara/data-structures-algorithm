function mergeAlternately(word1,word2) {
    let res = "";

    let i =  0;
    let j = 0;

    let n = word1.length;
    let m = word2.length;

    while(i<n || j < m) {
        if(i<n) res += word1[i];
        if(j<m) res += word2[j];
        i++;
        j++;
    }


    return res
}

console.log(mergeAlternately("ab","abbxxc"))