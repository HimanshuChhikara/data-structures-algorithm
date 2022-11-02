let stock = {
    "Fruits": [
      {
         "name": "apple",
         "itemCountInKg": 1,
         "itemPrice": 100
      },
       {
         "name": "Orange",
         "itemCountInKg": 1,
         "itemPrice": 200
      },
       {
         "name": "mango",
         "itemCountInKg": 1,
         "itemPrice": 250
      }
    ],
   "Vegetables": [
      {
         "name": "potato",
         "itemCountInKg": 2,
         "itemPrice": 40
      },
       {
         "name": "carrot",
        "itemCountInKg": 2,
         "itemPrice": 50
     },
       {
         "name": "onion",
         "itemCountInKg": 2,
         "itemPrice": 30
      }
    ]
};

function buy(item,type,quantity) {
    for(let k in stock) {
        if(k === type) {
            let items = stock[type];
            let i = 0;
            for(let values of items) {
                if(values.name === item) {
                    if(quantity <= values.itemCountInKg) {
                        let stockLeft = values.itemCountInKg - quantity;
                        console.log("Stock left ",stockLeft)
                        if(stockLeft === 0) {
                            items.splice(i,1);
                        }
                        else {
                            values.itemCountInKg = stockLeft;
                        }
                    }
                    else {
                        return "Out of Stock";
                    }
                }
                i++;
            }
        }
    }
    console.log("Stock == ",stock)
}

console.log(buy("carrot","Vegetables",1));
console.log(buy("carrot","Vegetables",1));
