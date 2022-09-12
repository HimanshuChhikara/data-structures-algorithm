// function searchInsert(nums,target){
//     var sort = nums.sort();
//     var len = nums.length;

//     for(var i =0 ;i<len ;i++){
//         if(nums[i] === target ){
//             console.log(i)
//         }
//         else{
//             var sum = 0;
//             var N = len;

//             var sum2 = N*(N+1)/2;
//             for(var i=0;i<len;i++){
//                 sum += sort[i];
//             }
//             var result =  sum2 - sum
//             console.log(result)
//         }
//     }
// }

// searchInsert([1,3,5,6],2)

function searchInsert(nums,value){
    nums.push(value);

    for(var i = nums.length-2 ;i>=0;i--){
        if (nums[i]== value){
            // console.log(i)
        }
        if (nums[i]<value){
            return i+1;
        }
        else{
            nums[i] = value
        }
    }

    return 0
}

var result = searchInsert([1,2,3,4,6],5)
console.log(result)


