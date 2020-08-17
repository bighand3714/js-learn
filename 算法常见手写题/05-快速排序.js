// 时间复杂度最好 O(nlog n)，最坏 O(n^2) [ 在位，不稳定 ]

function quickSort(arr, left, right) {
  if (left > right) {
      return
  }
  let i = left,
      j = right,
      pivot = arr[left];
  while(i != j) {
      // 从右往左找比基点小的元素
      while(arr[j] >= pivot && i < j) {
          j--
      }

      // 从左往右找比基点大的元素
      while(arr[i] <= pivot && i < j) {
          i++
      }

      if (i < j) {
        [arr[i],arr[j]] = [arr[j],arr[i]];
      }
  }
  [arr[left],arr[i]] = [arr[i],arr[left]];
  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, right);
}
console.log(quickSort([4,3,7,9,0,2,3,1,5],0,8));