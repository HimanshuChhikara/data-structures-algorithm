// var interval_1 = setInterval(() => {
//     console.log("setInverval")
// }, 5000);

// var interval_2 = setTimeout(()=>{
//     console.log("SetTimeout")
// },6000)

// var interval_3 = setImmediate(()=>{
//     console.log("SetImmideate")
// }
// )

// var fakeCallToServer = function() {
//     setTimeout(function() {
//         console.log('returning from server', new Date().toLocaleTimeString());
//     }, 4000);
// }



// setInterval(function(){ 

//     let insideSetInterval = new Date().toLocaleTimeString();

//     console.log('insideSetInterval', insideSetInterval);

//     fakeCallToServer();
// }, 2000);

const fruitArr1 = ['apple', 'mango'];
const fruitArr2 = ['banana', 'papaya'];

//Function to display the selected fruit name
// function displayFruit(fruit) {
//     console.log(`The fruit selected is ${fruit}`);
// }

// //Function that'll call the 'displayFruit' method after setTimeout function is invoked
// //If the fruit name is mango, the clearTimeout method will clear the timeout value and mango fruit will not be displayed
// function checkFruit(fruitArr) {
//     fruitArr.forEach(function(fruit) {
//         const timeout = setTimeout(displayFruit, 2000, fruit);
//         if (fruit === 'mango') {
//             clearTimeout(timeout);
//         }
//     })
// }

// //Invoke checkFruit method
// checkFruit(fruitArr1);
// checkFruit(fruitArr2);

const carArr = ['Tesla', 'Ford']

//Display the output -> The car is 'name of car' on console
function displayCar(car) {
    console.log(`The car is ${car}`);
}

function checkCar(carArr){
    carArr.forEach((car) => {
        const interval = setInterval(displayCar,2000,car);
        if(car == 'Tesla'){
            clearInterval(interval)
        }
    });
}
checkCar(carArr)
// displayCar('test')