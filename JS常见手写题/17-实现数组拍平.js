// 基础版
const flatten1 = (arr) => {
  let res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flatten1(item)); // concat 不会改变原有的数组，而仅仅会返回被连接数组的一个副本
    } else {
      res.push(item);
    }
  });
  return res;
};

/* 
arr.reduce(callback,[initialValue])
callback （执行数组中每个值的函数，包含四个参数）

    1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
    2、currentValue （数组中当前被处理的元素）
    3、index （当前元素在数组中的索引）
    4、array （调用 reduce 的数组）

initialValue （作为第一次调用 callback 的第一个参数。）
*/
// 使用 reduce 简化
const flatten2 = (arr) => {
  return arr.reduce(
    (previousValue, currentValue) =>
      Array.isArray(currentValue)
        ? (previousValue = previousValue.concat(flatten2(currentValue)))
        : previousValue.concat(currentValue),
    []
  );
};

// reduce + 指定深度扁平 【不能用push，因为返回值是数组的新长度】
const flattenByDeep = (arr, deep = 1) => {
  return arr.reduce((previousValue, currentValue) => {
    return Array.isArray(currentValue) && deep > 1
      ? (previousValue = previousValue.concat(
          flattenByDeep(currentValue, deep - 1)
        ))
      : previousValue.concat(currentValue);
  }, []);
};

const arr = [1, 2, 3, [3, 2, 1, [4, 5, 6], 9]];
console.log(flattenByDeep(arr,1));
