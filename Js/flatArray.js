let arr = [
    [1,2],
    [3,4,5],
    [5,6,[7,8,[9,10,11]],10],
    [11,21]
]

function flatArray(arr,depth = 1) {
    let res = [];

    for(let i=0;i<arr.length;i++) {
        if(Array.isArray(arr[i]) && depth > 0) {
            res.push(...flatArray(arr[i],depth - 1))
        }
        else {
            res.push(arr[i])
        }
    }
    return res;
}

console.log(flatArray(arr,3));