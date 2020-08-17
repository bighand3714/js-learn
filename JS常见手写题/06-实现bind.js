Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("调用 bind 方法的对象不是一个函数！");
  }
  context = context || window;
  const exeFn = this;
  return function F(...args1) {
    if (this instanceof F) {
      return new exeFn(...args, ...args1);
    } else {
      return exeFn.apply(context, [...args, ...args1]);
    }
  };
};

const foo = {
  value : 1
}
function bar(name,age){
  console.log(this.value);
  console.log(name);
  console.log(age);
}
const Bar = bar.myBind(foo);
new Bar('winnie',18);