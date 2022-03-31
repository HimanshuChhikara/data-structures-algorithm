# Promises with real api examples

## Basic working and syntax

jsx
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});


jsx
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});


## JavaScript then() method
The then() method is used with the callback when the promise is successfully fulfilled or resolved.

*Example*

jsx

// returns a promise

let countValue = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

// executes when promise is resolved successfully

countValue
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  });


OUTPUT

Promise resolved
You can call multiple functions this way.


JavaScript catch() method
The catch() method is used with the callback when the promise is rejected or if an error occurs. For example,

jsx
// returns a promise
let countValue = new Promise(function (resolve, reject) {
   reject('Promise rejected'); 
});

// executes when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result);
    },
 )

// executes if there is an error
.catch(
    function errorValue(result) {
        console.log(result);
    }
);


OUTPUT
> Promise rejected




## Using Promise with async await

jsx
async getShipModes() {
  return new Promise((resolve, reject) => {
    const orderId = this.props.orderData.orderID;
    if (orderId) {
      let orderAPI = `${CHECKOUT_API.getAllShippingModes}?orderId=${orderId}`;
      apiManager
        .get(orderAPI)
        .then((result) => {
          resolve(result.data.data.shippingModes); //will return the shippingmodes
        })
        .catch((error) => {
          logger.error(error);
          resolve([]);                             //will return an empty array list
        });
    }
  });
}

   
Now to call our promise we will use the await and async

jsx
async getAllShippingModes(){
	const shippingModes = await this.getShipModes();
}


## Using promises without async await

jsx
getInventory(){
  return new Promise((resolve, reject) => {
    const data = getInventoryApiParams(items);
    const pincode = appCookie.get(COOKIE_NAME.pincode);
    try {
      apiManager
        .get(PDP_API.pinCodeAPI + pincode, data)
        .then((response) => {
          let inventoryData = response.data.data;
          return resolve(inventoryData); //this will return the inventoryData
        });
    } catch (err) {
      logger.error(err);
      return reject(err);  //this will return the error
    }
  });
}


jsx
getInventory(this.props.listItemData.orderDetail.orderItems)
  .then((data) => {
    this.setState({
      inventoryList: data,  
    })
  })
  .catch((error) => {
    logger.error(error);
    throw new Error(error);
  });


## Async and Await to call a API with fetch

jsx
async function myFetch() {
  try {
    let response = await fetch('https://api.com/v1/ticker/?limit=10');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch(e) {
    console.log(e);
  }
}

myFetch();

## Using then to call a API with fetch

jsx
  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
