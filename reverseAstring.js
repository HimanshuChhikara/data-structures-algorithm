function reverse(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Its good to go';
    }

    const Backwards = [];
    console.log(`original String is : ${str}`)
    const totalItems = str.length-1;

    for(i=totalItems ; i >= 0; i-- ){
        Backwards.push(str[i])
        if(str[i]==' '){
            Backwards.pop(str[i]);
            console.log('yes')
        }
        // console.log(Backwards);
    }
    console.log(Backwards)

    return Backwards.join('');
}

const res = reverse('Hi is everthing is working fine');
console.log(res)