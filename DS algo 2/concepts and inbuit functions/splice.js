let arr = [1,0,0,1,1,0,0,0,1,2];

for(let i = 0; i<arr.length; ++i){
    if(arr[i] == 1){
        arr.splice(i,0,1)
        arr.pop()
        i++
    }
    console.log(arr)
}