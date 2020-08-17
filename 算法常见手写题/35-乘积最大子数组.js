// 乘积最大子数组
// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

// 示例：

// 输入: [2,3,-2,4] 输出: 6 解释: 子数组 [2,3] 有最大乘积 6。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (nums.length === 1) return nums[0]
    let maxP = 1, minP = 1, res = 0
    for (let i = 0; i < nums.length; i++) {
        // 关键点：当 nums[i] < 0 时，最大值可以变最小值，最小值可以变最大值
        if(nums[i]<0){
            [maxP,minP] = [minP,maxP]
        }
        maxP = Math.max(maxP * nums[i], nums[i])
        minP = Math.min(minP * nums[i], nums[i])
        res = Math.max(maxP, res)
    }
    return res
};