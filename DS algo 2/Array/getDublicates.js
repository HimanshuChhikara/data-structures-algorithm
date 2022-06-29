function getDublicates(arr1,arr2){

    let map1 = new Map();
    let map2 = new Map();
    let result = [];

   for(let i=0 ;i<arr1.length ;i++){
       if(map1.has(arr1[i]) && map2.has(arr2[i])){
           map1.set(arr1[i],map1.get(arr1[i])+1);
           map2.set(arr2[i],map2.get(arr2[i])+1);
       }
       else{
           map1.set(arr1[i],1)
           map2.set(arr2[i],1)
       }
   }
   console.log(map1);

   map1.forEach((key,value) => {
    if(key > 1){
        result.push(value);
    }
   });
   map2.forEach((key,value) => {
    if(key > 1){
        result.push(value);
    }
   });
   console.log(result)
}

console.log(getDublicates([1,2,3,4,2,4,5],[2,3,4,3,4,5]))