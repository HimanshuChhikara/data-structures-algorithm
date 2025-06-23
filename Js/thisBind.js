const obj = {
    name: 'Object',
    regularFunction: function() {
      console.log(this.name);
    },
    arrowFunction: () => {
      console.log(this.name);
    },
    nestedFunction: function() {
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
  obj.nestedFunction();
  
  const detached = obj.regularFunction;
  detached();