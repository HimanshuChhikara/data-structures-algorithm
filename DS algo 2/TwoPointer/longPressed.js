function longPressed(name,typed){
   for(var i=0,j=0;i<name.length && j< typed.length; i++){
       if(name[i] == typed[j]) j++
       else if(name[i] != typed[j]) return false
   }

   return i == name.length && j == typed.length
}

console.log(longPressed("alex","aalexx"))