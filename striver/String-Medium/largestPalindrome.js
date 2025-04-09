function largestPalindrome(str) {

    if(str.length <=1) return str
    let length = str.length;
    let start = 0
    let end = 0;
    let maxLen = 1

    // odd length

    for(let i = 0; i < length; i++) {
        let left = i;
        let right = i

        while(left >=0 && right < length) {
            if(str[left] == str[right]){
                left--;
                right++;
            }
            else {
                break;
            }
        }

        let len = right - left - 1;
        if(len > maxLen) {
            maxLen = len;
            start = left + 1;
            end = right - 1;
        }
    }


    return str.substr(start,maxLen);
}

console.log(largestPalindrome("babad"))