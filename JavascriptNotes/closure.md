Defination : funciton along with its lexical scope bundled together forms a closure.

```
function x() {

  let a = 9;
  
  function y() {
   console.log(a);
   }
   
   return y;
}

let z = x()
console.log(z) // this will return the whole function that is y
```
//...................
z() ? this will return 9 as function y is returned and whole closure is returned from that and this will give 9 as console.


Gotcha's 

1. What if we change the value of a to 100 on before returning y ?
 Ans : Value will be changed to 100 because it is refering to the address of a not the value of a. We just changed the value of a but address of a is still same that why it will return updated value
 
 
Closure most asked interview question :

```
function x() {
    for(var i =0; i<= 5; i++) {
        function k(i){
            setTimeout(function() { 
                console.log(i);
            }, i * 1000);
        }
        k(i)
    }
}

x();
```
