Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new Error("调用 apply 方法的对象不是一个函数！");
  }
  context = context || window;
  const fn = Symbol("fn");
  context[fn] = this;
  const res = args ? context[fn](...args) : context[fn]();
  Reflect.deleteProperty(context, fn);
  return res;
};

const foo = {
  value: 1,
};
function bar(name) {
  console.log(this.value); //在全局作用域下执行，this指向 window
  console.log(name);
}
bar.myApply(foo, ["winnie"]);