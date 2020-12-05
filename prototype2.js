function particle(){
    this.x = 100;
    this.y = 99;
    // this.show = function(){
    //     var res = x + y;
    //     console.log(res);
    // }
}

particle.prototype.show = function(){
    var res = this.x + this.y;
    console.log(res);
}

var p = new particle()
console.log(p.show())
console.log(p)