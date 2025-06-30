const obj = {
    name: 'Object',
    regularFunction: function() {
      console.log(this.name);
    },
    arrowFunction: () => {
      console.log(this.name);
    },
    nestedFunction: function() {
      name = 'dede'
      const inner = function() {
        console.log("INNER",this.name);
      };
      const innerArrow = () => {
        console.log("INNNER ARROW",this.name);
      };
      inner();
      innerArrow();
    }
  };
  
  obj.regularFunction();
  obj.arrowFunction();
  let fun = {
    name: 'Global Object'
  }
  let res = obj.bind(fun)
  console.log("NESTED .....",res.nestedFunction())

  
  const detached = obj.regularFunction;
  detached();