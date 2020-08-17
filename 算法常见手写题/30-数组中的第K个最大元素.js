// 数组中的第K个最大元素
// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
   quickSort(nums,0,nums.length-1);
   console.log(nums);
   return nums[nums.length-k];
};

var quickSort = function(nums,l,r){
  if(l>r) return;
  let randomIndex = l + Math.floor(Math.random() * (r-l+1)),
      left = l,
      right = r,
      pivot;
  [nums[randomIndex],nums[l]] = [nums[l],nums[randomIndex]];
  pivot = nums[l];
          
  while(left<right){
      // 从右往左找比 pivot 小的数
      while(nums[right]>=pivot && left<right){
         right--;
      }
      
      while(nums[left]<=pivot && left<right){
          left++;
      }
      
      if(left<right){
          [nums[left],nums[right]] = [nums[right],nums[left]]; 
      }  
  }
  [nums[l],nums[left]] = [nums[left],nums[l]];
  quickSort(nums,l,left-1);
  quickSort(nums,left+1,r);
}