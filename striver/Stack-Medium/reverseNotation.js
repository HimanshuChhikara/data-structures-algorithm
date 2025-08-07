function evalRn(nums) {
    let stack = [];
    let res
    for(let i=0;i<nums.length;i++) {
        if(nums[i] === "+") {
            res = evaluate(stack,"+",res)
        }
        else if(nums[i] === "-") {
            res = evaluate(stack,"-",res)
        }
        else if(nums[i] === "*") {
            res = evaluate(stack,"*",res)
        }
        else if(nums[i] === "/") {
            res = evaluate(stack,"/",res)
        }
        else {
            stack.push(+nums[i])
        }
    }
    // console.log(typeof res)
    return stack.pop();
}

function evaluate(stack,op) {
    // while(stack.length > 0) {
    let result
        if(op === "+") {
            if(result === undefined) result = 0

            result += stack.pop()
            result += stack.pop()

        }
        else if(op === "-") {
            if(result === undefined) {
                result = stack.pop()
            }
            else {
                result = stack.pop() - result;
            }
            result = stack.pop() - result;
        }
        else if(op === "*") {
            if(result === undefined) result = 1
            result *= stack.pop()
            result *= stack.pop()
        }
        else if(op === "/") {
            if(result === undefined) {
                result = stack.pop()
            }
            else {
                result = Math.floor(stack.pop()/result)
            }
            result = Math.floor(stack.pop()/result)
        }
    // }
    stack.push(result);
    return result;

}

console.log(evalRn(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))