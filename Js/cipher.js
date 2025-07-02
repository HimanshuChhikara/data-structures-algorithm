function caesarCipher(text, shift=0) {
    return text.split('').map(char => {
      const charCode = char.charCodeAt(0);
  
      // Handle uppercase letters
      if (charCode >= 65 && charCode <= 90) {
        let value = ((charCode + 65 - shift) % 26 ) + 65
        return String.fromCharCode(value);
      }
    }).join('');
}

console.log(caesarCipher('ABCDEFGH',2));