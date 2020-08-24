// 不同路径
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。问总共有多少条不同的路径？

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = [] // 记录到达 (m,n) 位置共有多少条路径
    for (let i = 0; i < m; i++) {
        dp[i] = 1
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[j] = dp[j] + dp[j - 1]
        }
    }
    return dp[m - 1]
};