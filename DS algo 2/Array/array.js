var arra = Array.apply(null,Array(100))
  .map(function(val,index){
      return index+1;
   });
//  console.log(arra);

  
     var evenArray = [];
     for(var i = 0;i<=arra.length;i++){
         if(i%2 == 0){
             evenArray.push(i);
         }
         return evenArray
     }
 
//  console.log(evenArray);

 var squareEvenNumbers = function(evenArray){
     return new Promise((resolve,reject)=>{
         try{
        var even = 0;
        for(var i=0;i<=evenArray.length;i++){
            if(i%2==0){
                even += evenArray[i];
            }
            console.log(even)
        }
    }
    catch(err){
        reject(new Error(err))
    }
     })
     Promise.resolve("Solved")
     .then(res => console.log(even));
       
  }
  squareEvenNumbers();

 function doSomething() {
    return new Promise((resolve, reject) => {
      console.log("It is done.");
      const squareEvenNumbers = (evenArray) => {
        let sum = 0;
        for (let i = 0; i < evenArray.length; i++) {
          if (evenArray[i] % 2 === 0) {
            sum = Math.pow(sum + evenArray[i], 2);
          }
        }
        return sum
      }
      if (sum %2 ==0) {
        resolve("SUCCESS")
      } else {
        reject("Odd Number was passed")
      }
    })
  }