
function longestRepeatingChar(s,k) {

    let hashMap = new Set();
    let max = 0;
    let left = 0;
    for(let i=0;i<s.length;i++) {
        while(hashMap.has(s[i])) {
            hashMap.delete(s[left]);
            left++
        }
        hashMap.add(s[i]);
        max = Math.max(max,i - left + 1);
    }
    return max;
}

console.log(longestRepeatingChar("AABABBA",1));