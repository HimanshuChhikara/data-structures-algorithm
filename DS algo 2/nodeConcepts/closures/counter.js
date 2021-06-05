function counter(){

    var counter = 0;

    this.incrementCounter = function(){
        counter++;
        console.log(counter);
    };

    this.decrementCounter = function(){
        counter--;
        console.log(counter);
    }
    
}

var counter1 = new counter()
counter1.incrementCounter();
counter1.incrementCounter();
console.log(counter1)
counter1.decrementCounter();
console.log(counter1)