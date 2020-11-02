// arr 1 = [2,4,6,8];
// arr 2 = [10,13,14,25];

function mergeSorted(arr1,arr2){
    let mergedArr = [];
    let  arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i =1;
    let j =1;
    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }
    while(arr1Item || arr2Item){
        if(arr1Item < arr2Item){
            mergedArr.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        }
        if(arr2Item < arr2Item){
            mergedArr.push(arr2Item);
            arr1Item = arr2[j];
            j++;
        }
    }
    return mergedArr;
}

const result = mergeSorted([2,4,6,8],[10,13,14,25]);
console.log(result);