// 完全平方数
// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

// 示例：

// 输入: n = 13 输出: 2 解释: 13 = 4 + 9.

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const dp = []
    const ceil = Math.floor(Math.sqrt(n))
    dp[0] = 0
    for (let i = 1; i <= n; i++) {
        dp[i] = Number.MAX_SAFE_INTEGER
    }
    for (let i = 1; i <= ceil; i++) {
        let square = i*i
        for (let j = square; j <= n; j++) {
            dp[j] = Math.min(dp[j - square] + 1, dp[j])
        }
    }
    return dp[n]
};