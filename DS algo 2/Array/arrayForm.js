let addToArrayForm = function(num, k) {
    let sum;
    let number = ""
    for(let i=0;i<num.length;i++) {
        number = number + num[i];
    }
    
    sum = parseInt(number) + parseInt(k);

    let res = [];
    let str = sum.toString();
    for(let i =0;i<str.length;i++) {

        res.push(parseInt(str[i]));
    }

    return res;
};

console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3],516));