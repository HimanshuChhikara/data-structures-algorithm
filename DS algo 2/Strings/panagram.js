var isPanagram = function(sentence){

    const set = new Set();

    for(let i=0 ;i<sentence.length ;i++){
        set.add(sentence[i]);
    }

    return set.size === 26 ? true : false
}

console.log(isPanagram('thequickbrownfoxjumpsoverthelazydog'))

