
function longestRepeatingChar(s,k) {

    let map = new Set(s);
    let maxCount = 0;

    // calculate the longest subString as Right - left + 1 this is the length of substring - count (count of most repeated character) if this is greater than k then we need to move left pointer
    for(let c of map) {
        let left = 0;
        let count = 0;

        for(let right = 0;right<s.length;right++) {
            if(s[right] === c) {
                count++;
            }

            while((right - left + 1) - count > k) {
                if(s[left] === c) {
                    count--;
                }
                left++;
            }
            maxCount = Math.max(maxCount, right - left + 1);
        }
    }
    return maxCount;
}

console.log(longestRepeatingChar("AABABBA",1));