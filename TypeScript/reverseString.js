function reverseString(str) {
    var _a;
    var arr = str.split("");
    var i = 0;
    var j = str.length - 1;
    while (i < j) {
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
        i++;
        j--;
    }
    return arr.join("");
}
console.log(reverseString("Himanshu"));
