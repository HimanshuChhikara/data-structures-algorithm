var intToRoman = function(num){
  const hash = [
    {
      roman: 'M',
      val: 1000,
    },
    {
      roman: 'CM',
      val: 900,
    },
    {
      roman: 'D',
      val: 500,
    },
    {
      roman: 'CD',
      val: 400,
    },
    {
      roman: 'C',
      val: 100,
    },
    {
      roman: 'XC',
      val: 90,
    },
    {
      roman: 'L',
      val: 50,
    },
    {
      roman: 'XL',
      val: 40,
    },
    {
      roman: 'X',
      val: 10,
    },
    {
      roman: 'IX',
      val: 9,
    },
    {
      roman: 'V',
      val: 5,
    },
    {
      roman: 'IV',
      val: 4,
    },
    {
      roman: 'I',
      val: 1,
    },
  ];

  let res = '';
  let i = 0

  while(num > 0){
    console.log("value of i"+i)
    console.log("hash[i] value=="+hash[i].val);
    if(num >= hash[i].val){
      // console.log("Hash[i]  =="+hash[i])
      console.log("hash[i].value ==="+hash[i].val);
      res += hash[i].roman;
      console.log("res =="+res);
      num -= hash[i].val
      // console.log("num=="+num)
    }
    else i++
  }
  return res;
}

console.log(intToRoman(31))
// return res;