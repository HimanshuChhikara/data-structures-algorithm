function arrayLeader(arr){

    let res = [];
    for(let i= 0;i<arr.length;i++) {
        let leader = true;

        for(let j = i+1;j<arr.length;j++) {
            if(arr[j] > arr[i]) {
                leader = false
                break;
            }
            if(leader) {
                console.log(arr[i]);
            }
        }
        console.log(arr[arr.length-1]);
    }
    return res;
}

console.log(arrayLeader([10, 22, 12, 3, 0, 6]))