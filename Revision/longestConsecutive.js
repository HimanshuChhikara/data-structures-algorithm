function longestConsecutiveString(s) {

    let hashSet = new Set();
    let max = 0;
    let left = 0;

    for(let right=0;right < s.length;right++) {
        while(hashSet.has(s[right])) {
            hashSet.delete(s[left]);
            left++
        }

        hashSet.add(s[right]);
        max = Math.max(right - left + 1, max)
    }
    return max
}

console.log(longestConsecutiveString('xxxx'));