// // var isPalindrome = function(x) {
//     var x =121;
//     var remainder;
//     var reverseN = 0;
//     var originalN = 121;
    
//     while(x != 0){
//         remainder = x % 10;
//         reverseN = reverseN * 10 + remainder;
//         originalN = originalN/10;
//     }
// console.log(originalN);    

// // }

// // isPalindrome(121)

var a,no,b,temp=0;

no= 121;

b=no;
while(no>0)
{
a=no%10;
no=parseInt(no/10);
temp=temp*10+a;
}
if(temp==b)
{
console.log("Palindrome number");
}
else
{
console.log("Not Palindrome number");
}
