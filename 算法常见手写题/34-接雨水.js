// 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length === 0) return 0;
    let n = height.length,
        ans = 0,
        left = 0,
        right = n -1,
        lMax = height[0],
        rMax = height[n-1];
    while(left<=right){
        lMax = Math.max(lMax,height[left]);
        rMax = Math.max(rMax,height[right]);

        if(lMax<rMax){
          ans += lMax - height[left];
          left++;
        }else{
          ans += rMax - height[right];
          right--;
        }
    }
    return ans;
};