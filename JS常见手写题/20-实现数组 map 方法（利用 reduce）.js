Array.prototype.reduceToMap = function (handler){
  return this.reduce((pre, cur, index) => {
    pre.push(handler.call(this, cur, index));
    return pre;
  }, []);
};

const testArr = ["winnie", "lxm", "ljc"];
const res = testArr.reduceToMap((item, index) => {
  return {
    [index]: item,
  };
});
console.log(res);