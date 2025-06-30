function lengthOfLongestSubstring(s) {
    let left = 0;
    let max = 0;
    let charSet = new Set();
    for(let right=0;right<s.length;right++) {
        while(charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        max = Math.max(max, right - left + 1);
    }
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));


// https://neetcode.io/problems/longest-substring-without-duplicates?list=neetcode150