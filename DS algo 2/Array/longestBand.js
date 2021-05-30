function findLongestband(arr){
    let sorted = arr.sort((a,b) => a-b)
    let len = arr.length
    var count = 0
    for(var i=0 ;i<sorted.length ;i++){
        if(sorted[i]+1 == sorted[i+1]) {
            count++
        }
        
    }
    return count
}

var res = findLongestband([1,9,3,0,18,5,2,4,10,7,12,6])
console.log(res)