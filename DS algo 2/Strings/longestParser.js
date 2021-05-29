function longestSegment(s){
    let count0 = 0;
    let count1 = 0;

    let finalcount0 = 0;
    let finalcount1 = 0;

    for(let i = 0;i<s.length;i++){
        if(s[i]== '1'){
            count1++;
            count0 = 0;
            finalcount1 = Math.max(count0,count1);
        }
        else{
            count1 = 0
            count0++
            finalcount0 = Math.max(count0,count1)
        }
    }
    
    return finalcount1 > finalcount0
}