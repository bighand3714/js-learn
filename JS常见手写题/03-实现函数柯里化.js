/* 
函数柯里化：接收函数A作为参数，运行后能够返回一个能够处理A剩余参数的函数。
通俗易懂的解释：用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数。
*/

function curry(fn, ...args) {
  let preParams = args
  // console.log('...args: ', args)
  return function innerCurry(...restArgs) {
    // console.log('...restArgs: ', restArgs)
    if (restArgs.length === 0) {
      // 函数执行时机
      return fn(...preParams)
    } else {
      preParams = preParams.concat(restArgs)
      // console.log('preParams: ' , preParams)
      return innerCurry
    }
  }
}

function add(...args) {
  return args.reduce((sum, a) => sum + a, 0)
}

// 实现一个add方法，使计算结果能够满足如下预期：
// curryAdd(1)(2)(3) = 6;
// curryAdd(1, 2, 3)(4) = 10;
// curryAdd(1)(2)(3)(4)(5) = 15;

function curryAdd() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments)
  console.log("_args: ", _args)

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function() {
    _args.push(...arguments)
    return _adder
  }
  
  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function() {
    return _args.reduce((a, b) => (a + b))
  }
  return _adder
}

console.log(curryAdd(1)(2)(3)(6, 5, 6))

console.log(curry(add, 1, 2)(3)(4, 5)(1, 4)())