// 数组中的逆序对
// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    let numsLen = nums.length;
    if (numsLen < 2) return 0;
    return reversePairsByMerge(nums, 0, numsLen - 1);
};

var reversePairsByMerge = function (nums, left, right) {
    if (left === right) {
        return 0;
    }
    let mid, leftPairs, rightPairs, crossPairs;
    mid = Math.floor((left + right) / 2)
    leftPairs = reversePairsByMerge(nums, left, mid);
    rightPairs = reversePairsByMerge(nums, mid + 1, right);
    if (nums[mid] <= nums[mid + 1]) {
        return leftPairs + rightPairs;
    }
    crossPairs = mergeAndAccount(nums, left, mid, right);
    return leftPairs + rightPairs + crossPairs;
}

var mergeAndAccount = function (nums, left, mid, right) {
    const helperArr = [];
    let i = left, j = mid + 1, k = left, count = 0;

    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) {
            helperArr[k++] = nums[i++];
        }
        else {
            helperArr[k++] = nums[j++];
            count += (mid - i + 1);
        }
    }

    while (i <= mid) {
        helperArr[k++] = nums[i++];
    }

    while (j <= right) {
        helperArr[k++] = nums[j++];
    }

    for (let i = left; i <= right; i++) {
        nums[i] = helperArr[i];
    }

    return count;
}