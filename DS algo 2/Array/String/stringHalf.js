function checkStringHalf(s) {

    let arr = ['a','e','i','o','u','A','E','I','O','U'];

    let s1 = s.slice(0,s.length/2);
    let s2 = s.slice(s.length/2,);

    let index = 0;
    let count = 0;

    while(index < s.length) {
        if(arr.includes(s1[index])) {
            count++;
        }
        if(arr.includes(s2[index])) {
            count--;
        }
        index++;
    }

    return count == 0
}

console.log(checkStringHalf('book'));