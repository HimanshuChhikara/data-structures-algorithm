function createTargetArray(nums,index){
    let target = [];

    for(let i=0;i<index.length;i++){
        let value = index[i];
       
        target.splice(value,0,nums[i])
    }
    return target
}

var rew = createTargetArray([1,2,3,4,0],[0,1,2,3,0]);
console.log(rew);

