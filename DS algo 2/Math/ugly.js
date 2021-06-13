function findUgly(n){

if(n<=0) return false;
if(n<5) return true

   while(n % 2 ==0){
       n = n /2;
   }
   while(n % 3 ==0){
       n = n/3;
   }
   while(n % 5 ==0){
       n = n / 5;
   }

   return (n ==1)
}

var res = findUgly(6);
console.log(res)
