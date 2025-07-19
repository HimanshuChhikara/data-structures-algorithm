function numRescueBoats(people,limit) {
    people.sort((a,b) => a-b);
    let res = 0;
    let left = 0;
    let right = people.length - 1;

    while(left <= right) {
        let remain = limit - people[right--];
        res++;
        if((left <= right && remain >= people[left])) {
            left++;
        }
    }
    return res
}

console.log(numRescueBoats([5,1,4,2],6));