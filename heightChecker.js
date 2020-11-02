// function heightChecker(heights){
//     var len = heights.length;
//     var temp;
//     var swaps = 0
//     for(var i=0;i<len;i++){
//         swaps++
//         for(var j=i+1;j<len;j++){
//             // swaps++
//             // console.log(`Swaps ${swaps++}`)
//             if(heights[i]>=heights[j]){
//                 swaps++;


//                 temp = heights[i];
//                 heights[i] = heights[j];
//                 heights[j] = temp;


//                 // console.log(`Swaps ${swaps++}`)
//             } 
//         }
//     }
//     console.log(swaps)
//     console.log(heights);
// }

// heightChecker([1,1,4,2,1,3]);

function heightChecker(heights){
    var len = heights.length;

    var sort = heights.slice(0).sort( (a,b)=>a-b);
    var count = 0
    // console.log(sort);

    for(let i=0;i<len;i++){
        if(heights[i]!==sort[i]){
            count++
        }
        // console.log(count)
        // return count;
    }
    return count
}

var result = heightChecker([5,1,2,3,4])
console.log(result)