/*
1. 判断是否传入 context
2. 为 context 创建一个 Symbol 属性，值为函数的引用
3. 以对象调用的形式执行函数
4. 删除属性，返回结果
三点运算符(...)的作用：合并与拆解。
合并运用在函数接收 rest 参数等。
拆解运用在 rest 参数的逆运算，将数组转为用(,)分隔的参数序列。
*/

Function.prototype.myCall = function(context, ...args) {
  if (typeof this !== "function") {
    throw new Error("调用对象非function")
  }
  context = context || window
  const fn = Symbol("fn") // 创建一个 Symbol（保证不会重名）属性
  context[fn] = this
  const res = context[fn](...args)
  Reflect.deleteProperty(context, fn) // Object 命令式的操作变成函数行为
  return res
}

const value = 'window'
const foo = {
  value: 'foo'
}
function bar() {
  console.log(this.value)
}
bar.myCall(foo)