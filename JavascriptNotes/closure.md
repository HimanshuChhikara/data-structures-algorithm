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
