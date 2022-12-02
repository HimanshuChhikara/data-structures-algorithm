const add = function addThem() {
    let counter = 1
    return value => {
     counter *= value;
     return counter;
   }
   } 
   const addSub = add();  
   for (var i = 1; i <= 3; i++) setTimeout(() => console.log(addSub(i)),100);