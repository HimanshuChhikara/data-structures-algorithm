function subSequence(index = 0,arr,current = []) {
    if(index >= arr.length) {
        console.log(current);
        return;
    }

    // res.push(arr[index]);
    subSequence(index+1,arr,current);
    // res.pop(arr[index]);
    subSequence(index+1,arr,[...current,arr[index]]);
}


function main() {
    let arr = [3,1,2];

    subSequence(0,arr,[]);

}

main()