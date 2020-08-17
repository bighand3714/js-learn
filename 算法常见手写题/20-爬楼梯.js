// 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 示例：

// 输入：3, 输出：3, 解释：有三种方法可以爬到楼顶。1. 1 阶 + 1 阶 + 1 阶 2. 1 阶 + 2 阶 3. 2 阶 + 1 阶

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const stairs = [1, 2], len = stairs.length, dp = []
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
/**
 * 优化空间复杂度
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) { // 和 面试题 08.11. 硬币 不同，因为凑三分硬币，1+2 和 2+1 是同一种表示法
    if (n < 2) return 1
    let i_1 = 1, i_2 = 1, methods = 0
    for (let i = 2; i <= n; i++) {
        methods = i_1 + i_2
        i_1 = i_2
        i_2 = methods
    }
    return methods
};