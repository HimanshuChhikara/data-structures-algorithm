function removeDuplicat(arr) {
    arr.sort(function (a, b) { return a - b; });
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        if (arr[i] != arr[i + 1]) {
            arr.splice(i, 2);
        }
    }
    return arr;
}
var res = removeDuplicat([1, 2, 3, 4, 5, 4, 3, 2]);
console.log(res);
