// sort 0,1 and 2 in an array
function sort_0_1_2(arr){
    var count_Zero = 0; // make count for zero one and two
    var count_One = 0;
    var count_Two = 0;
        for(j=0;j<arr.length;j++){
            if(arr[j] == 0){
                count_Zero++; // increment the count if number is zero
            }
            if(arr[j] == 1){
                count_One++; // increment the count if number is 1
            }
            if(arr[j] == 2){
                count_Two++  // increment the count is number is 2
            }
        }
    var i = 0;
        while(count_Zero--){
            arr[i] = 0; 
            i++;
        }
        while(count_One--){
            arr[i] = 1;
            i++
        }

        while(count_Two--){
            arr[i]= 2;
            i++
        }
        return arr;
}

var res = sort_0_1_2([2,0,1,1,2,0,0,1,0,2]);
console.log(res);