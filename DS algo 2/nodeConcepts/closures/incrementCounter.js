function counnt(){
   var counter = 0

    function incrementCounter(){
        counter++
        console.log(counter)
    }
    return incrementCounter
}

// counnt()

var counter1 = counnt()
counter1()
// console.log(counter) // can't access the variable counter as it is inside the function