function majority(nums){
    if(nums.length == 0){
        return nums[0];
    }

    var half = nums.length / 2;
    let elementCount = new Map();

    for(let num of nums){
        if(!elementCount.has(num)){
            var answer = elementCount.set(num,1);
            console.log(answer)
        }
        else{
            var demo = elementCount.set(num, elementCount.has(num) + 1);
            console.log(demo);
        }
        if(elementCount.get(num)>half){
            return num
        }
    }
    return -1
}

var result = majority([3,2,2,3,2]);
console.log(result)