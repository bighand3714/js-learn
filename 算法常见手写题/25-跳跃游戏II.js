// 跳跃游戏 II
// 给定一个非负整数数组，你最初位于数组的第一个位置。 数组中的每个元素代表你在该位置可以跳跃的最大长度。 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 1. X -> A -> B 从 [X,A] 区间找 [A,B] 最大跳跃距离 B。end 指向 A。
 * 2. i 走到 end 时，跳跃一步到 A，同时更新 end 到下一次最大跳跃距离 B。
 * 3. 以上两步循环执行，直至跳跃到终点。
 */
var jump = function (nums) {
    let minJumpCount = -1,
        maxJumpDistance = 0,
        end = 0;
    for (let i = 0; i < nums.length; i++) {
        maxJumpDistance = Math.max(maxJumpDistance, i + nums[i]);// 计算下一次能跳到的最远距离
        maxJumpDistance = maxJumpDistance > nums.length - 1 ? nums.length - 1 : maxJumpDistance;// [2,2,2,0,1,1,2,3] 防止下一次能跳的距离超过终点
        if (i === end) {// i 能走到上一次更新的最大距离
            minJumpCount++;
            end = maxJumpDistance;// 更新 end 到下一次能跳到的最大距离
        } else if (i > end) {
            return -1;
        }
    }
    return minJumpCount;
};