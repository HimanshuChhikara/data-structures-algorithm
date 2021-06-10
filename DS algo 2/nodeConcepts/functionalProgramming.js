const radius = [1,4,2,3];

const area = function(radius){
    return Math.PI * radius * radius;
}

const circumfrence = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function(radius){
    return 2 * radius;
}

const calculate = function(radius,logic){
    const output = [];
    for(let i =0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(radius.map(area));

// console.log(calculate(radius,area));
// console.log(calculate(radius,circumfrence));
// console.log(calculate(radius,diameter));