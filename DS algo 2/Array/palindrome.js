function checkPalindrome(arr) {
    let res = [];

    for(let i=0;i<arr.length;i++) {
        let palindrome = arr[i];
        let strin = check(palindrome);
        if(strin === true) {
            res.push(palindrome);
        }
    }
    return res;
}

function check(str) {
    let n = str.length;
    let i = 0;
    let j = n - 1;
    let floor = Math.floor(n/2);
    while(i < floor) {
        if(str[i] != str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(checkPalindrome(['reaceecar','racecar','okay','335533']))