function addNumberToMap(arr){
    let map = new Map();
    
    var splitted = [];
    for(let j = 0;j<arr.length;j++){
        for(let k =0;k<arr[j].length;k++){
            splitted.push(arr[k]);
        }
    }
    console.log(splitted)

    for(let i= 0; i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i]) || 0) + 1);

    }
    console.log(map);
}

var res = addNumberToMap(['Himanshu','Chhikara']);
console.log(res)