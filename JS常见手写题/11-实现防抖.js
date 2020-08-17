/* 
防抖：不管事件触发频率多高，一定在事件触发n秒后才执行。如果你在一个事件触发的 n 秒内又触发了这个事件，就以新的事件的时间为准，n秒后才执行。
应用场景：窗口大小变化，调整样式；搜索框，输入后1000毫秒搜索；表单验证，输入1000毫秒后验证
*/

/**
 * @param {*} handler 响应函数
 * @param {*} delay  延迟时间
 * @param {*} immediate  是否需要立即执行 【 有时候我们需要让函数立即执行一次，再等后面事件触发后等待n秒执行 】
*/

function debounce(handler, delay, immediate) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    // this的真实指向并非 debounce 的调用者，而是返回闭包的调用者。
    if (immediate && !timer) {
      handler.apply(this, args);
    }
    timer = setTimeout(() => {
      handler.apply(this, args);
    }, delay);
  };
}
