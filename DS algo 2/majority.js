/*
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
*/

var majorityElement = function(nums){

    // Create a empty object 

    const empty = {};
    // loop through the object with a value 
    for(const num of nums){
        // console.log("value of nums  "+nums)
        empty[num] = empty[num] + 1 || 1; // count the value of each element in object
        console.log("value of num =="+num)
    }

    for(const i in empty){
        // check if maximum repeated value is greater than the half of array length
        if(empty[i] > Math.floor(nums.length/2)){
            return i // returns the value of total times value repeated
        }
    }
}

console.log(majorityElement([2,2,1,1,1,2,2]))