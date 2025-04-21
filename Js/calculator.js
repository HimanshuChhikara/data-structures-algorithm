
const calc = {
    total: 0,
    add: function(a) {
        this.total += a
        return this;
    },
    multipy: function(a) {
        this.total *= a
        return this;
    },
    subtract: function(a) {
        this.total -= a;
        return this;
    }
}



const result = calc.add(10).multipy(2).subtract(5).add(10);
console.log(result.total)