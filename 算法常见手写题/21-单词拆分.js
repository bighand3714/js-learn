// 单词拆分
// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = [], // 表示第 i 个字符之前的子串能否在字典中出现。当 dp[i] 为 true 时，开始从字典中找能从 i 跳到的下一个位置 newEnd 
          n = s.length
    dp[0] = true
    for (let i = 1; i <= n; i++) {
        dp[i] = false
    }
    let word = '', wordSize = 0, maxEnd = 0, newEnd = 0
    for (i = 0; i < n; i++) {
        if (i > maxEnd + 1) return false;
        if (!dp[i]) continue;
        for (let j = 0; j < wordDict.length; j++) {
            word = wordDict[j]
            wordSize = word.length
            newEnd = i + wordSize
            if (newEnd > n) continue
            if (s.substr(i, wordSize).search(word) !== -1) {
                dp[newEnd] = true
                maxEnd = Math.max(maxEnd, newEnd)
            }
        }
    }
    return dp[n]
};