// function reverse(str){
//     if(!str || str.length < 2 || typeof str !== 'string'){
//         return 'Its good to go';
//     }

//     const Backwards = [];
//     console.log(`original String is : ${str}`)
//     const totalItems = str.length-1;

//     for(i=totalItems ; i >= 0; i-- ){
//         Backwards.push(str[i])
//         if(str[i]==' '){
//             Backwards.pop(str[i]);
//             console.log('yes')
//         }
//         // console.log(Backwards);
//     }
//     console.log(Backwards)

//     return Backwards.join('');
// }

// const res = reverse('Hi is everthing is working fine');
// console.log(res)


function reverseAString(s){
    var len = s.length;
    var i =0;
    var j = len - 1;
    var temp ;
    while(i < j){
        
        temp = s[i]
        s[i] = s[j]
        s[j] = temp
        
        i++
        j--
        
    }
    return s
    
}

var res = reverseAString(["h","e","l","l","o"])
console.log(res)