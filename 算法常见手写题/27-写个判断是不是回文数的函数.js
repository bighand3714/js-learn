// 写个判断是不是回文数的函数
function isPalindrome(num){
  if(num<0) return false
  return Array.from(String(num)).reverse().join('')===String(num)
}
console.log(isPalindrome(123));

function isPalindrome1(num){
  if(num<0 || (num!=0 && num % 10 ===0)){
    return false
  }else if(num>=0 && num<10){
    return true
  }
  let newNum=0,original=num,flag;
  while(num!=0){
    newNum = num % 10 + newNum * 10;
    num = Math.floor(num /10);
  }
  flag = newNum === original ? true : false;
  return flag; 
}
console.log(isPalindrome1(121));