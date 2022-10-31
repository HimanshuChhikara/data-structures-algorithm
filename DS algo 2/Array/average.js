var average = function(salary) {
    salary.sort((a,b) => a-b);

    salary.pop();
    salary.shift();

    let sum = 0;

    for(let i=0;i<salary.length;i++) {
        sum = sum + salary[i];
    }
    let average = sum / salary.length;
    return average;
};

console.log(average([4000,3000,1000,2000]));