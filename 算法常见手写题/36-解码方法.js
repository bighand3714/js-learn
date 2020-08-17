// 解码方法
// 示例

// 输入: "12" 输出: 2 解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (Number(s[0]) === 0) return 0
    const n = s.length
    let pre = 1, cur = 1, tempCur = 0
    for (let i = 1; i < n; i++) {
        tempCur = cur
        if (s[i] === '0') {
            if (s[i - 1] === '1' || s[i - 1] === '2') cur = pre
            else return 0
        }
        else if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] >= '1' && s[i] <= '6')) {
            cur = pre + cur
        }
        pre = tempCur
    }
    return cur
};