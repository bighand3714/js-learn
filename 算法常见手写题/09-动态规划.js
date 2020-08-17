// 动态规划
// 核心： 记住已经解决过的子问题的解。用空间换时间。

// 原理：

// 最优子结构：选或不选 ，是两种情况， 同时诞生了两个子问题。求解这两个子问题 然后比较结果 填入最优的那一个。
// 重叠子问题：在斐波拉契数列中，可以看到大量的重叠子问题，比如说在求fib（6）的时候，fib（2）被调用了5次。
// 通用解题思路：申请一个 dp 数组，明确数组中每个元素代表的含义，找到状态转移方程和 base case。一般用于求最值。

// 斐波拉契数
function Fibonacci(n){
    if(n<=1){
        return n;
    }
    let i = 1;
    let pre = 0;
    let current = 1;
    let result = 0;
    while(i++ < n){
        result = pre + current;
        pre = current;
        current = result;
    }
    return result;
}