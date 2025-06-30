let arr = [1,2,3,4,5,6,7];

// arr.map((a) => {
//     console.log(a);
// })

Array.prototype.myMap = function (callback,thisArg) {
    const result = [];

    for(let i=0;i<this.length;i++) {
        if(i in this) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }
    return result;
}

let arr2 = arr.myMap((a) => {
    return a * 2;
})
console.log(arr2)