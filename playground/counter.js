class counter{
    constructor(){
        this.count = 0
    }

    increment(){
        this.count++
    }

    decrement(){
        this.count--
    }
}

const counterOne = new counter()
counterOne.increment();
counterOne.increment();
counterOne.increment();
counterOne.decrement();
counterOne.increment();


const counterTwo = new counter()
counterTwo.increment();

console.log(counterOne.count);