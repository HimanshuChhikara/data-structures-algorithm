var sortArrayByParity = function(A) {
      // var output = []
      var len = A.length;
      var index = 0;
      for(var i=0;i<len;i++){
        // console.log(i);
         if( A[i] % 2 == 0){
          //  console.log("Value of i " + i)
          //  console.log(A[index])
           //Here Swapping of even number is done
          var temp = A[index];
          A[index++] = A[i];
          A[i] = temp
         }
      }
      return A
};

console.log(sortArrayByParity([3,1,2,4]))