// Problem Statement: Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

 

// Update the below function body for your logic.

// Hit the Run button to view the output on the console on the right.

 

 

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

 

// 'abba' & 'baab' == true

 

// 'abba' & 'bbaa' == true

 

// 'abba' & 'abbba' == false

 

// 'abba' & 'abca' == false

 

function anagrams(word, listOfWords) { 
 
    var result = []

    if(listOfWords === null || listOfWords.length == 0){
        return result
    }

    var map = {}

    var words = listOfWords = listOfWords.slice(',');
    for(var i = 0 ; i<= words.length;i++){

        var arr = words[i]

        if(words[i] === word){
            result.push(word[i])
        }
        
        console.log(result)

    }
 
    
    
}
var res = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
console.log(res)

 

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])

// => ['aabb', 'bbaa']

 

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])

//  => ['carer', 'racer']

 

// anagrams('laser', ['lazing', 'lazy', 'lacer'])

//  => []

