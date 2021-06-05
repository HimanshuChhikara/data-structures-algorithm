function checkNumber(firstWord,secondWord,targetWord){
   let obj = {
       'a':'0',
       'b':'1',
       'c':'2',
       'd':'3',
       'e':'4',
       'f':'5',
       'g':'6',
       'h':'7',
       'i':'8',
       'j':'9'
   }

   let first = ""; 
   let second = "";
   let target = "";

   for(let char of firstWord){
       first += obj[char]
   }
   console.log(first);

   for(let char of secondWord){
       second += obj[char]
   }
   console.log(second);

   for(let char of targetWord){
       target += obj[char]
   }
   console.log(target)

   return parseInt(first) + parseInt(second) == parseInt(target)
}

var res = checkNumber('acb','cba','cdb');
console.log(res)