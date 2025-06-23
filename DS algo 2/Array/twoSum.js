var twoSum = function(arr, sum) {
    let map = new Map()

    for(let i=0;i<arr.length;i++) {
        let diff = sum - arr[i];
        if(map.has(diff)) {
            return [map.get(diff),i]
        }
        
        map.set(arr[i],i)
        
    }
    return []
 };

 console.log(twoSum( [3,2,4],6))