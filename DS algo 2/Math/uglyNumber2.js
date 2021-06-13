function uglyNumber2(n){
    let two
    let three 
    let five 

    let p2 = 0;
    let p3 = 0;
    let p5 = 0;

    let result = [1];
    let pushVAlue
    while(n.length < n){
        two = n[p2]*2;
        three = n[p3]*3;
        five = n[p5]*5;
        console.log(two);
        console.log(three);
        console.log(five);

        pushVAlue = Math.min(two,three,five);
        result.push(pushVAlue);

        if(pushVAlue == p2){
            p2++
        }
        if(pushVAlue == p3){
            p3++
        }
        if(pushVAlue == p5){
            p5++
        }
    }
    return pushVAlue;
}

var res = uglyNumber2(10)
console.log(res)