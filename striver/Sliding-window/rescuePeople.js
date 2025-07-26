function rescuePeople(people,limit) {
    people = people.sort((a,b) => a-b);

    let left = 0;
    let right = people.length - 1
    let boat = 0;


    while(left <= right) {
        let sum = people[left] + people[right]
        if(sum <= limit) {
            left++
        }    
        right--
        boat++
    }
    return boat
}


console.log(rescuePeople([1,3,2,3,2],3))