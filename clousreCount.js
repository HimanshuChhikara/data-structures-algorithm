function log(){
    var count =0;

    return function(){
        console.log("count before increment =="+count);
        count += 1;
        return count
        console.log(count);
    }
    
}

const counter = log()
console.log(counter());
console.log(counter());
console.log(counter());