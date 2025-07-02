let nums = [1,2,3,4,5,6];

const result = nums.reduce((acc,current,i,arr)=> {
    console.log("Arr",arr,current)
    return acc + current + i
},0)

console.log(result)