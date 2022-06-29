// Square each element of an array 
// and then sort that array in assending order
var sortedSquares = function(nums){
    var len = nums.length;
    var arr = [] // create an empty array for storing new square sorted array
    for(var i=0;i<len;i++){ // loop throug the array
        arr.push(nums[i]*nums[i]) // multiply each number with itself 
    }
    return arr.sort(function(a,b){ //use sort function and return a-b
        return a-b // return sorted array
    })
}

console.log(sortedSquares([-4,-1,0,3,10]));