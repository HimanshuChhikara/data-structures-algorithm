function findMissing(nums){
    var arr = nums.sort((a,b)=> a-b)

    for(let i=0 ;i<arr.length; i++){
        if(arr[i] !== i){
            console.log(i) 
        }
    }
}
var res =  findMissing([1]);
console.log(res)