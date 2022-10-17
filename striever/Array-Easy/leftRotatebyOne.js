// Input: N = 5, array[] = {1,2,3,4,5}
// Output: 2,3,4,5,1
// Explanation: 
// Since all the elements in array will be shifted 
// toward left by one so ‘2’ will now become the 
// first index and and ‘1’ which was present at 
// first index will be shifted at last.

function leftRotate(arr) {
    let temp = arr[0];

    for(let i=0;i<arr.length-1;i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;

    return arr;

}

console.log(leftRotate([1,2,3,4,5]));