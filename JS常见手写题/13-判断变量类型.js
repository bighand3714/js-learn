//判断JS变量类型，值类型、引用类型、null单独判断
function judgeType(target) {
  let type = typeof target;
  if (target === null) {
    return "null";
  } else if (type === "object") {
    return (type = Object.prototype.toString
      .call(target)
      .match(/\[object (.*)\]/)[1]);
  } else return type;
}

function judgeType1(target) {
  let type = typeof target; //typeof可以准确判断除了null以外的值类型
  const template = {
    "[object Array]": "Array",
    "[object Object]": "Object",
    "[object Number]": "Number-object",
    "[object Boolean]": "Boolean-object",
    "[object String]": "String-object",
  };
  if (target === null) {
    return "null";
  } else if (type == "object") {
    let res = Object.prototype.toString.call(target);
    return template[res];
  } else {
    return type;
  }
}