function removeDuplicat(arr: number[]) : number[] {
    arr.sort((a,b) => a-b);

    for(let i of arr) {
        if(arr[i] != arr[i+1]) {
            arr.splice(i,1)
        }
    }
    return arr

}


let res: number[] = removeDuplicat([1,2,3,4,5,4,3,2]);
console.log(res);