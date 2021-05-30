var a = {
    name:"himanshu",
    Age:12,
    sum: function(){
        let a = 10;
        let b = 10;
        let sum = a + b;
        console.log(sum)
        console.log(this.name)
        console.log(this.Age)
    }
}
console.log(a.sum())