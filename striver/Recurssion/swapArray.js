let arr = [1,2,3,4,5];
function reverseArr(l,r) {
    if(l >= r) return arr;

    swapArr(l,r)
    return reverseArr(l+1,r-1);
}

function swapArr(l,r) {
    [arr[l],arr[r]] = [arr[r],arr[l]];
    return arr;
}

console.log(reverseArr(0,arr.length - 1));