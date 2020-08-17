// 最长上升子序列
// 给定一个无序的整数数组，找到其中最长上升子序列的长度。

// 示例：

// 输入: [10,9,2,5,3,7,101,18] 输出: 4 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if(!nums.length) return 0;
    let maxLen = 1,dp = [],LISLen = 1;
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        maxLen = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j] && dp[j] + 1 > maxLen) {
                maxLen = dp[j] + 1;
            }
        }
        maxLen > 1 ? dp[i] = maxLen : '';
        dp[i] > LISLen ? LISLen = dp[i] : '';
    }
    return LISLen;
};