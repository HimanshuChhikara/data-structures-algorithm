function firstMissing(nums) {
    let missing = 1;

    while(true) {
        let flag = true;
        for(let num of nums) {
            if(num === missing) {
                flag = false;
                break;
            }
            if(flag) return missing
            missing++;
        }
    }
}

console.log(firstMissing([3,4,-1,1]))