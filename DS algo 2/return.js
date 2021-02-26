

var squareEvenNumbers = function(){
    var even = 0;
    var evenArray = [1,2,3]
    var evenArraySquare = [];
    var sum = 0;
     for(var i=0;i<evenArray.length;i++){
        evenArraySquare.push(evenArray[i]*evenArray[i]);
     }
  return evenArraySquare
  }
  console.log(squareEvenNumbers())