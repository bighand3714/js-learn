// 硬币
// 硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)

// 示例

// 输入: n = 10; 输出：4; 解释: 有四种方式可以凑成总金额: 10=10 10=5+5 10=5+1+1+1+1+1 10=1+1+1+1+1+1+1+1+1+1

/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
    const coins = [1, 5, 10, 25]
    const dp = [] // 存储金额为 j 时，表示法的总数
    dp[0] = 1
    for (let i = 1; i <= n; i++) {
        dp[i] = 0
    }
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= n; j++) {
            // 左边 dp[j] 表示金额为 j 时有多少种表示法，右边的 dp[j] 表示不选择第 i 个硬币时拥有的表示法. dp[j - coins[i]] 表示选择第 i 个硬币时所拥有的表示法，比如 dp[6],选择 5 时，表示法总数取决于 dp[1]
            dp[j] = (dp[j] + dp[j - coins[i]]) % 1000000007
        }
    }
    return dp[n]
};