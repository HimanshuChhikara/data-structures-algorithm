class Car {
    constructor(make,modal) {
        this.make =  make;
        this.modal = modal;
    }

    start() {
        return new Promise((resolve) => {
            setTimeout(()=> {
                resolve(`This is ${this.make} ${this.modal}`);
            },1000)
        })
    }
}

// (async () => {
//     try {
//         let car = new Car('BMW', 'X5');
//         let result = await car.start();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// })();


async function getStartCar() {
    let car = new Car('BMW', 'X5');
    let result = await car.start();
    console.log(result);
}

getStartCar()