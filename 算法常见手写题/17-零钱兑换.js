// 零钱兑换
// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

// 示例

// 输入: coins = [1, 2, 5], amount = 11; 输出: 3; 解释: 11 = 5 + 5 + 1

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = [] // 位置 j ,表示金额为 j 时存储最少的硬币个数
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        dp[i] = Number.MAX_SAFE_INTEGER
    }
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            let curCoinNum = dp[j - coins[i]] + 1
            dp[j] = curCoinNum < dp[j] ? curCoinNum : dp[j]
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
};