// // function sort_0_1_2(arr,n){
// //     var count_Zero = 0;
// //     var count_One = 0;
// //     var count_Two = 0;
    
// //     for(var i=0;i<n;i++){
// //         if(arr[i] == 0){
// //             count_Zero++;
// //             // return count_Zero;
// //         }
// //         if(arr[i] == 1){
// //             count_One++
// //             // return count_One
// //         }
// //         if(arr[i]== 2){
// //             count_Two++
// //             // return count_Two
// //         };
// //     }

// //     var empty = [];
// //     var j = 0;

// //     while(count_Zero--){
// //         empty.push(0);
// //         j++;
// //     }

// //     while(count_One--){
// //         empty.push(1);
// //         j++;
// //     }

// //     while(count_Two--){
// //         empty.push(2);
// //         j++
// //     }

// //     console.log(empty);
// // }

// // var res = sort_0_1_2([1,2,2,1,1,0,0,1,0,0,1,0]);
// // console.log(res);

function sort_0_1_2(arr){
    var count_Zero = 0;
    var count_One = 0;
    var count_Two = 0;
        for(j=0;j<arr.length;j++){
            if(arr[j] == 0){
                count_Zero++;
            }
            if(arr[j] == 1){
                count_One++;
            }
            if(arr[j] == 2){
                count_Two++
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

var res = sort_0_1_2([2,0,1]);
console.log(res);