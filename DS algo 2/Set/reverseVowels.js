function reverseVowels(s){
    var letter = s.split('')
    var arr = ['a','e','i','o','u'];
    let i = 0
    let j = s.length - 1
    var temp = ""
    while(i<j){
        if(arr.includes(letter[i]) && arr.includes(letter[j])){
            temp = letter[i]
            letter[i] = letter[j]
            letter[j] = temp
            i++
            j--
        }
        else if(!arr.includes(letter[i])){
            i++
        }
        else j--
        
    }

    return letter
    return letter.join('')
}

console.log(reverseVowels("leetcode"))


// let letters = s.split('');
//   let i = 0;
//   let j = letters.length - 1;
//   let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

//   while (i < j) {
//     let temp = '';
//     if (vowels.includes(letters[i]) && vowels.includes(letters[j])) {
//       temp = letters[i];
//       letters[i] = letters[j];
//       letters[j] = temp;
//       i++;
//       j--;
//     } else if (!vowels.includes(letters[i])) {
//       i++;
//     } else {
//       j--;
//     }
//   }

//   return letters.join('');