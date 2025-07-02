let count =0;
function counter() {
    function increment() {
        count++;
        return count
    }   
    return increment(); 
}

console.log(counter())
console.log(counter())
console.log(counter())