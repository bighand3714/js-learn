// 股票的最大利润
// 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

// 示例：

// 输入: [7,1,5,3,6,4] 输出: 5 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

// 参考题解

/**
 * 交易次数为 1
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(!prices || prices.length === 0) return 0
    const dp = [[]],n = prices.length -1 
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for(let i =1 ;i<prices.length;i++){
        dp[i] = []
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
        dp[i][1] = Math.max(dp[i-1][1],-prices[i])
    }
    return dp[n][0]
};
/**
 * 优化空间复杂度
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices || prices.length === 0) return 0
    let dp_i_0 = 0, dp_i_1 = -prices[0];

    for (let i = 1; i < prices.length; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1, -prices[i])
    }
    return dp_i_0
};