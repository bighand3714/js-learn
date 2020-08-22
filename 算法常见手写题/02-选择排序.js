// 选择排序：每一次扫描列表都找出一个最小的值放到无序区的首部。对数组A做第i次扫描，找出最小值A[min]，和A[i]做交换。 时间复杂度 O(n^2) [ 在位，不稳定 ]

// 思路：外层循环控制第 n+1 小的元素，每次循环找出本轮的最小值放到指定位置

//选择排序
const selectSort = (arr) => {
  let n = arr.length, min;
  for (let i = 0; i < n - 1; i++) {
    min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
console.log(selectSort([1, 6, 7, 2, 3, 9, 3]));