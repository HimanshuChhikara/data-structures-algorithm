function checkLongestPalindrome(s) {

    let res = 0;
    let resLen = 0;

    for(let i=0; i<s.length;i++) {
        // odd length;

        let left = i;
        let right = i;

        while((left >= 0 && right < s.length) && s.charAt(left) == s.charAt(right)) {
            if(right - left + 1 > resLen) {
                resLen =  right - left + 1;
                res = left  
            }
            left--;
            right++
        }

        // even Length;

        left = i;
        right = i + 1

        while(left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
            if(right - left + 1 > resLen) {
                resLen =  right - left + 1;
                res = left
            }
            left--;
            right++
        }
    }
    return s.substring(res,res + resLen)
}


console.log(checkLongestPalindrome("ccc"));