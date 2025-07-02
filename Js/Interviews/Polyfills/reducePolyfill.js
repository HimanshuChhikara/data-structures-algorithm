Array.prototype.Myreduce = function (cb,initialValue) {
    var accum = initialValue;

    for(let i=0;i<this.length;i++) {
        accum = accum ? cb(accum,this[i],i,this) : this[i];
    }

    return accum;

}

let a = [1,2,3,4,5];
let res = a.Myreduce((acc,curr)=>{
    return acc + curr
},0);
console.log(res)