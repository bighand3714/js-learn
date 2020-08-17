// 最小路径和
// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。 说明：每次只能向下或者向右移动一步。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let dp = [],m = grid.length,n = grid[0].length;
    for (let i = 0; i < m; i++) {
        dp[i] = [grid[i][0]];
        for (let j = 0; j < n; j++) {
            if (i === 0 && j >= 1) {
                dp[i][j] = grid[i][j] + dp[i][j - 1];
            }
            else if (j === 0 && i >= 1) {
                dp[i][j] = grid[i][j] + dp[i - 1][j];
            }
            else if (i >= 1 && j >= 1) {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
            }
        }
    }
    return dp[m-1][n-1];
};
