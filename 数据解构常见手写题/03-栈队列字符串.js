// 栈和队列
// 简单 ⭐️
// 用两个栈实现一个队列
// 解决思路：利用一个栈进行 push，另一个栈进行 pop

// push：用一个栈 stack1 进行 push
// pop：如果另一个栈 stack2 为空，则先将另一个栈的值 push 过来，再将 stack2 pop。否则 stack2 直接 pop
const stack1 = [];
const stack2 = [];

function push(node)
{
    stack1.push(node);
}
function pop()
{
    if(stack2.length === 0){
       while(stack1.length>0){
        stack2.push(stack1.pop());
       }
    }
    return stack2.pop() || null;
}
// 用两个队列实现一个栈
// 解决思路：每次 push 保持一个队列为空

// push：将 x 往空的一个队列 push ，并将另一个有值的队列追加其后，保证有一个队列为空
// pop：哪个队列有值哪个队列就 shift
const queue1 = []
const queue2 = []

function push(x) {
  if (queue1.length === 0) {
    queue1.push(x)

    while (queue2.length) {
      queue1.push(queue2.shift())
    }
  } else if (queue2.length === 0) {
    queue2.push(x)

    while (queue1.length) {
      queue2.push(queue1.shift())
    }
  }
};
function pop() {
  if (queue1.length !== 0) {
    return queue1.shift()
  } else {
    return queue2.shift()
  }
};
// 字符串
// 子串和子序列的区别

// 子串是连续的
// 子序列可以不连续
// 举个栗子

// 对于一个字符串而言，比如：pikachu。

// 子串是在字符串中，取出一块（连续的），如：pik, ach, kac等；
// 子序列指的是从字符串中，顺序取出字符，但是可以不连续：如：pau, kch, icu等 。
// 最长公共子串
// 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return '';
  if(strs.length === 1) return strs[0];
  let base = strs[0],
      commonLen = 0,
      commonPrefix = '';
  for(let i =1; i<strs.length;i++){
     commonPrefix = '',
     commonLen = base.length < strs[i].length ? base.length : strs[i].length;
     for(let j = 0;j<commonLen;j++){
         if(base[j]===strs[i][j]){
           commonPrefix += base[j]; 
         }else{
            break;
         }
     }
     base =  commonPrefix ;
  }
   return commonPrefix; 
};
// 无重复字符的最长子串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例：

// 输入: "abcabcbb" 输出: 3 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 思路：滑动窗口

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0
    let left = 0, right = 0, window = new Map(), maxLen = 0
    const n = s.length
    while (right < n) {
        if (window.has(s[right])) {
            left = Math.max(window.get(s[right]) + 1, left) // abba，left 已经移动过，并且在window.get(s[right]) + 1 前面，不需要后移
        }
        window.set(s[right], right)
        maxLen = Math.max(maxLen, right - left + 1)
        right++
    }
    return maxLen
};
// 最小覆盖子串
// 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const needMap = new Map(),
        windowMap = new Map(),
        arrT = Array.from(t),
        arrTLen = arrT.length,
        n = s.length
    for (let i = 0; i < arrTLen; i++) {
        if (needMap.has(arrT[i])) {
            let num = needMap.get(arrT[i]) + 1
            needMap.set(arrT[i], num)
        } else {
            needMap.set(arrT[i], 1)
        }
        windowMap.set(arrT[i], 0)
    }
    let left = 0,
        right = 0,
        start = 0,
        len = Number.MAX_SAFE_INTEGER,
        char = '',
        validSize = 0

    while (right < n) {
        char = s[right]
        right++
        if (needMap.has(char)) {
            let newNum = windowMap.get(char) + 1
            windowMap.set(char, newNum)
            if (needMap.get(char) === windowMap.get(char)) validSize++
        }
        while (validSize === needMap.size) {
            if (right - left < len) {
                start = left
                len = right - left
            }
            char = s[left] // 需要删除的字符
            left++
            if (needMap.has(char)) {
                if (windowMap.get(char) === needMap.get(char)) validSize--
                let newNum = windowMap.get(char) - 1
                windowMap.set(char, newNum)
            }
        }
    }
    return len === Number.MAX_SAFE_INTEGER ? "" : s.substr(start, len)
};