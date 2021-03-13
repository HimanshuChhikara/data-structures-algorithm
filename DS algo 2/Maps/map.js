function findNumber(){
    var arr = [1,2,3,4,5,1];

    var empty = {};
    var sum = 0;
    for(let num of arr){
        empty[num] = empty[num] || 1
        console.log(empty)
    }
    // console.log(empty)
    for(let i in empty){
        // console.log(i);
    }
}

findNumber()