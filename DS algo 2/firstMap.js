function checkDuplicates(){
  let arr = [1,2,3,4,5];
  var map = {};

  var result = false;

  for(let i=0;i<arr.length;i++){
    if(map[arr[i]]){
      result  = true

      break;
    }
    map[arr[i]] = true
  }
  if(result){
    console.log("array contain dubplicates");
  }
  else{
    console.log("array don't contain duplicates");
  }
}

const res = checkDuplicates();
console.log(res)