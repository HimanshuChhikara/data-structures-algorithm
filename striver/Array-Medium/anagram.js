function checkAnagram(str1,str2) {
    let map = new Map();

    for(let i=0;i<str1.length;i++) {
        map.set(str1[i], map.get(str1[i]) + 1 || 1);
    }

    for(let j=0;j<str2.length;j++) {
        if(map.has(str2[j])) {
            map.set(str1[j], map.get(str1[j]) - 1);
        }
    }
    
    return map.values();
}

console.log(checkAnagram('rescue','secure'));