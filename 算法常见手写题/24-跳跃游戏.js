// 跳跃游戏
// 给定一个非负整数数组，你最初位于数组的第一个位置。 数组中的每个元素代表你在该位置可以跳跃的最大长度。 判断你是否能够到达最后一个位置。

// 示例：

// 输入: [2,3,1,1,4] 输出: true 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxDistance = 0;
  for(let i=0;i<nums.length;i++){
      if(i>maxDistance) return false;
      maxDistance = Math.max(maxDistance,i+nums[i]);
  }
  return true;
};