var findInMountainArray = function(mountainArr) {
    

    var largest = 0;

    for(var i=1;i<= mountainArr.length-2;){
        if(mountainArr[i]>mountainArr[i-1] && mountainArr[i] > mountainArr[i+1]){

            var count = 1;
            var j = i;

            while( j>=1 && mountainArr[j] > mountainArr[j-1]){ // Tracking backword
                j--;
                count++;
            }
            while(i<=mountainArr.length-2 && mountainArr[i] > mountainArr[i+1]){ // tracking forward
                i++;
                count++;
            }
            largest = Math.max(largest,count);
        }

        else{
            i++
        }
    }
    return largest;
};

console.log(findInMountainArray([5,6,1,2,3,4,5,4,3,2,0,1,2,3,-2,-4]))