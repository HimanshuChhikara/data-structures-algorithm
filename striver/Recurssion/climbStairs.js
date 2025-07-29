function climbStairs(n) {

    function climb(i) {
        if(i >= n) return i===n;

        return climb(i+1) + climb(i+2)
    }

    return climb(0)
}

console.log(climbStairs(3))