function combination(candidates,target) {
    let res = [];

    function makeCombination(index,comb,total) {
        if(total === target) {
            res.push([...comb]);
            return;
        }
        if(total > target || index >= candidates.length) {
            return;
        }

        comb.push(candidates[index]);
        makeCombination(index,comb,total+candidates[index])
        comb.pop();
        makeCombination(index+1,comb,total);
    }

    makeCombination(0,[],0)
    return res;
}

console.log(combination([2,3,6,7],7))