function checkEqual(arr) {

    let length = arr.length;

    let equal = length / 2;

    if(equal % 1 === 0) {
        return arr[equal]
    }
    else {
        return -1
    }
}

let res = checkEqual([2,3,4,1,4,5,0,9,8,7,8,0,9,9])
console.log(res);