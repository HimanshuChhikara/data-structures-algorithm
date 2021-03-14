function countWords(S){
    
   var constMap = new Map(); // Create an empty Map
   const count = 0 // Set Count to 0

   for(const key of S){ // loop through String value with keys
       constMap.set(key,count) // Set both key and values in Map
   }
//    console.log(constMap);

   for(const key of S){
       let count = constMap.get(key); // Get value of key in Map
       constMap.set(key,count + 1) // Increment the vlaue of count if value of key is repeated
       var max = Math.max(...constMap.values(key)); // return maximum value of repeated key

   }
   return max
   console.log(constMap)

}

console.log(countWords('himanshu'))