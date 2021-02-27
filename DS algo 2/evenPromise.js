

const squareEvenNumbers = (evenArray) => {
    let sum = 0;
    for (let i = 0; i < evenArray.length; i++) {
      if (evenArray[i] % 2 === 0) {
        sum = Math.pow(sum + evenArray[i], 2);
      }
    }
    return sum
  }