function checkInclusion(s1,s2) {
    let map1 = new Map();
    let map2 = new Map();

    for(let i=0;i<s1.length;i++) {
        map1.set(s1[i], (map1.get(s1[i]) || 0) + 1);
    }

    let left = 0;
    for(let right = 0;right<s2.length;right++) {
        map2.set(s2[right],(map2.get(s2[right]) || 0) + 1);

        if(right - left + 1 > s1.length) {
            if(map2.get(s2[left]) === 1) {
                map2.delete(s2[left]);
            }
            else {
                map2.set(s2[left], map2.get(s2[left]) - 1);
            }
            left++;
        }

        if(map1.size === map2.size && [...map1.keys()].every(key => map1.get(key) === map2.get(key))) {
            return true
        }
    }
   
    return false

}

console.log(checkInclusion('ab','lecabee'))