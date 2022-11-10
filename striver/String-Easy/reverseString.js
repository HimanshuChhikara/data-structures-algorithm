function reverse(s) {
   let word = "";
   let res = [];
   for(let i=0;i<s.length;i++) {
    if(s[i] === " ") {
        word && res.unshift(word);
        word = "";
    }
    else {
        word += s[i];
    }
   }
   word && res.unshift(word)
   return res.join(" ");
}

console.log(reverse("the sky is blue"));