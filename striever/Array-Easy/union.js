// Example 1:
// Input:
// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}  
// arr2[] = {2,3,4,4,5}
// Output:
//  {1,2,3,4,5}

// Explanation: 
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1
// Distnict Elemennts in arr2 are : No distinct elements.
// Union of arr1 and arr2 is {1,2,3,4,5} 

// Solution 1  Using set function;
function union(arr1,arr2,n,m) {
    // let set = new Set();
    // let res = [];
    // for(let i=0;i<n;i++) {
    //     if(!set.has(arr1[i]))
    //     {
    //         set.add(arr1[i])
    //     }
    // }

    // for(let j=0;j<m;j++) {
    //     if(!set.has(arr2[j]))
    //     {
    //         set.add(arr2[j])
    //     }
    // }

    // for(let i of set) {
    //     res.push(i)
    // }
    // return res;

    let res = [];
    let i = 0;
    let j = 0;

    while(i<n && j <m) {
        if(arr1[i] <= arr2[j]) {
            if(res.length===0 || res[res.length-1] != arr1[i]) {
                res.push(arr1[i]);
                i++
            }
        }
        else {
            if(res.length===0 || res[res.length-1] != arr2[j])
            {
                res.push(arr2[j]);
                j++
            }
        }
        // if(arr1[i] === arr2[j]) {
        //     if(res[res.length-1] != arr1[i]){
        //         res.push(arr1[i]);
        //     }
        //     i++
        // }
    }

    while(i<n) {
        if(res[res.length-1] != arr1[i]){
            res.push(arr1[i])
            i++
        }
    }

    while(j<m) {
        if(res[res.length-1] != arr2[j]) {
            res.push(arr2[j]);
            j++
        }
    }
    return res;
}

console.log(union([1,2,3,4,5,6,7,8,9,10],[2,3,4,4,5,11,12],10,7));