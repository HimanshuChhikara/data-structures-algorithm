const obj = {
    value : 10,
    getValueFn : function () {
        return this.value;
    },
    getVlaueArrFn: () => {
        return this.value
    }
}

const antoherObj = {
    value : 20
}

console.log(obj.getValueFn());
console.log(obj.getVlaueArrFn());
console.log(obj.getValueFn.call(antoherObj));
console.log(obj.getVlaueArrFn.call(antoherObj));