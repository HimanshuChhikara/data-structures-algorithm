// function containDuplicates(nums){
//     var len = nums.length;
//     var count = new Map();

//     for(let num of nums){
//         var result = count.set(num,1);
        
//     }
//     console.log(result)
// };

// containDuplicates([1,2,4,1]);

// function containsDuplicates(nums){
//     for(var i=0;i<nums.length;++i){
//         console.log(i)
//         for(var j=0;j<nums.length;++j){
//             console.log(j)
//                 if(nums[j]!==nums[i]){
//                     // console.log('true');
//                     return false
//                     console.log('True')
//             }
//         }
//         console.log(true)
//         // return false
//     }
// }

// var res = containsDuplicates([1,2,3,4,1])
// console.log(res)

function containDuplicates(arr) {
    let obj = {};

    for(let i =0;i<arr.length;i++) {
        if(obj[arr[i]]) {
            obj[arr[i]] += 1;
            return true;
        }
        else {
            obj[arr[i]] = 1;
        }
    }
    return false;
}

let res = containDuplicates([1,2,3,4,2]);
console.log(res);