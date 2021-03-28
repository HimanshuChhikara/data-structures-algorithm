var sortArrayByParity = function(A) {
      var output = []
      var len = A.length;

      for(var i=0;i<len;i++){
          if(A[i] % 2 == 0){
            output.unshift(A[i]);
          }
          else
            output.push(A[i])
      }
      return output
};

console.log(sortArrayByParity([3,1,2,4]))