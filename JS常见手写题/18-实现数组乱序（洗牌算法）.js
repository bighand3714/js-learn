/* 
洗牌算法：一个1到n的序列，随机打乱，保证每个数出现在任意一个位置的概率相同。本质是对数组的随机重排。
实现：循环从尾到头取牌，放到数组的任意位置。
*/
function shuffle(arr) {
  const arrLen = arr.length;
  let curIndex = arrLen - 1;
  let randomIndex = 0;
  while (curIndex > -1) {
    randomIndex = Math.floor(arrLen * Math.random());
    [arr[randomIndex], arr[curIndex]] = [arr[curIndex], arr[randomIndex]];
    curIndex--;
  }
  return arr;
}

const testArr = [1,2,3,4,5,6,7];
console.log(shuffle(testArr));