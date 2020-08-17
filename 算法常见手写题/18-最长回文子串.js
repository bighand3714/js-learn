// 最长回文子串
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例：

// 输入: "babad" 输出: "bab" 注意: "aba" 也是一个有效答案。

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) return s
    const n = s.length, dp = [] // dp[i][j] 表示 s[i, j] 是否是回文串
    let maxLen = 1, start = 0
    for (let i = 0; i < n; i++) {
        dp[i] = []
    }
    for (let j = 1; j < n; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] === s[j]) {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            } else {
                dp[i][j] = false
            }
            if (dp[i][j]) {
                curLen = j-i+1
                if(curLen>maxLen){
                    start = i 
                    maxLen = curLen
                }
            }
        }
    }
    return s.slice(start, start + maxLen)
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) return s
    const n = s.length
    let oddStr = '', evenStr = '', maxPalindromeStr = s[0], maxLenStr = ''
    for (let i = 0; i < n - 1; i++) {
        oddStr = centerSpread(i, i, s)
        evenStr = centerSpread(i, i + 1, s)
        maxLenStr = oddStr.length > evenStr.length ? oddStr : evenStr
        maxPalindromeStr = maxLenStr.length > maxPalindromeStr.length ? maxLenStr : maxPalindromeStr
    }
    return maxPalindromeStr
};

var centerSpread = function (left, right, s) {
    const len = s.length
    let i = left, j = right
    while (i >= 0 && j < len) {
        if (s[i] === s[j]) {
            i--;
            j++;
        } else {
            break
        }
    }
    return s.slice(i + 1, j)
}