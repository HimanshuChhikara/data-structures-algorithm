function combination(candidates,target) {
    let res = [];

    function makeCombination(index,total,comb) {
        if(total === target) {
            res.push([...comb]);
            return;
        }
        if(total > target || index >= candidates.length) {
            return
        }
        comb.push(candidates[index]);
        makeCombination(index,total + candidates[index],comb); // pick
        comb.pop(); // remove the value that was pushed on backtracking
        makeCombination(index+1,total,comb); // not pick
        return res
    }

    makeCombination(0,0,[])
    return res
}

console.log(combination([2,3,6,7],7))