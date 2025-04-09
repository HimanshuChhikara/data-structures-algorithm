// arr = [1,[2,3,4,[5,6,7]]]
// output = [1,2,3,4,5,6,7]

let arr = [1,[2,3,4,[5,6,7]]];

let result = [];
let flatArrayPolyFill = (arr) => {

    let length = arr.length;

    debugger
    for (let i = 0;i<length;i++) {
        if(Array.isArray(arr[i])) {
            flatArrayPolyFill(arr[i]);
        }
        else {
            result.push(arr[i]);
        }
    }

    return result;
}


// console.log(flatArrayPolyFill([1,[2,3,4,[5,6,7]]]))

console.log(arr.flat())